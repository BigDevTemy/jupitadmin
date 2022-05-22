import { faker } from '@faker-js/faker';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { toast,ToastContainer } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography,TextField, CardContent,Card,Button, CardHeader } from '@mui/material';
import { reactLocalStorage } from 'reactjs-localstorage';

// components
import Page from '../components/Page';
import Iconify from '../components/Iconify';
// sections
import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
} from '../sections/@dashboard/app';



// ----------------------------------------------------------------------

export default function SetRate() {
    const navigate = useNavigate()
const [usdtsell,setusdtsell] = useState();
const [btcsell,setbtcsell] = useState();
const [giftcardsell,setgiftcardsell] = useState();

const [usdtbuy,setusdtbuy] = useState();
const [btcbuy,setbtcbuy] = useState();
const [giftcardbuy,setgiftcardbuy] = useState();

const handleBtcBuy = (e)=>{
    setbtcbuy(e.target.value)
}

const handleBtcSell = (e)=>{
    setbtcsell(e.target.value)
}

const handleUsdtSell = (e)=>{
    setusdtsell(e.target.value)
}
const handleUsdtBuy = (e)=>{
    setusdtbuy(e.target.value)
}

const handleGiftcardSell = (e)=>{
    setgiftcardsell(e.target.value)
}
const handleGiftcardBuy = (e)=>{
    setgiftcardbuy(e.target.value)
}

const updateGiftcardSell = async ()=>{
    const BaseUrl = process.env.REACT_APP_ADMIN_URL;
   
    await axios({
      url:`${BaseUrl}/admin/set/rate/giftcard`,
      method:'POST',
      headers:{
        'Content-Type':'application/json',  
        'Authorization':reactLocalStorage.get('token')
      },
      data:JSON.stringify({giftcard_sell:giftcardsell,type:"GIFTCARD_SELL"})
    })
    .then((res)=>{
      console.log(res.data)
      toast.success(res.data.message,'Success Callback');
      
    })
    .catch((err)=>{
     
      if(err.response){
        if(err.response.status === 403){
          console.log(err.response.data.message);
          Swal.fire({
            title: 'Message!',
            text: err.response.data.message,
            icon: 'error',
            confirmButtonText: 'ok'
          });
          navigate('/',{replace:true})
          return false;
          
        }
        
            toast.error(err.response.data,'Failed Callback');
    
        console.log(err)
      }
      else{
        console.log(err)
      }
      
      // Swal.fire({
      //   title: 'Message!',
      //   text: err.response.message,
      //   icon: 'error',
      //   confirmButtonText: 'ok'
      // });

    })
}



  const theme = useTheme();
  return (
    <Page title="Dashboard">
         <ToastContainer/>
      <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
          Rate Portal.
        </Typography>
      <Grid item xs={12} md={6} lg={8}>
          <Card  style={{marginTop:10}}>
              <CardHeader title="BTC RATE BOARD"/>
                
                <CardContent>
                    <TextField fullWidth label="Set Buy Rate BTC" id="fullWidth"  type="number" value={btcbuy || ''}  onChange={handleBtcBuy} />
                    <Button variant="outlined"  to="#" color="secondary" startIcon={<Iconify icon="arcticons:microsoftauthenticator" /> } style={{marginTop:5,marginBottom:20}}>
                       Save Buy Rate (<Iconify icon="cryptocurrency:btc"/>)
                    </Button>

                    <TextField fullWidth label="Set Sell Rate BTC" id="fullWidth"  type="number"  value={btcsell || ''}  onChange={handleBtcSell}/>
                    <Button variant="outlined"  to="#" color="secondary" startIcon={<Iconify icon="arcticons:microsoftauthenticator" /> } style={{marginTop:5}}>
                       Save Sell Rate (<Iconify icon="cryptocurrency:btc"/>)
                    </Button>
                </CardContent>
          </Card>

          <Card  style={{marginTop:10}}>
              <CardHeader title="USDT RATE BOARD"/>
                  
                <CardContent>
                    <TextField fullWidth label="Set Buy USDT" id="fullWidth"  type="number"  value={usdtbuy || ''}  onChange={handleUsdtBuy}  />
                    <Button variant="outlined"  to="#" color="secondary" startIcon={<Iconify icon="arcticons:microsoftauthenticator" /> } style={{marginTop:5,marginBottom:20}}>
                       Save Buy Rate (<Iconify icon="cryptocurrency:usdt"/>)
                    </Button>

                    <TextField fullWidth label="Set Sell USDT" id="fullWidth"  type="number" value={usdtsell || ''}  onChange={handleUsdtSell} />
                    <Button variant="outlined"  to="#" color="secondary" startIcon={<Iconify icon="arcticons:microsoftauthenticator" /> } style={{marginTop:5}}>
                       Save Sell Rate (<Iconify icon="cryptocurrency:usdt"/>)
                    </Button>
                </CardContent>
          </Card>

          <Card  style={{marginTop:10}}>
              <CardHeader title="GIFTCARD RATE BOARD"/>
                  
                <CardContent>
                    <TextField fullWidth label="Set Buy GiftCard" id="fullWidth"  type="number"  value={giftcardbuy|| ''}  onChange={handleGiftcardBuy}  />
                    <Button variant="outlined"  to="#" color="secondary" startIcon={<Iconify icon="arcticons:microsoftauthenticator" /> } style={{marginTop:5,marginBottom:20}}>
                       Save Buy Rate (<Iconify icon="ic:round-card-giftcard"/>)
                    </Button>

                    <TextField fullWidth label="Set Sell GiftCard" id="fullWidth"  type="number"  value={giftcardsell|| ''}  onChange={handleGiftcardSell}   />
                    <Button variant="outlined"  to="#" color="secondary" startIcon={<Iconify icon="arcticons:microsoftauthenticator" /> } style={{marginTop:5}} onClick={()=>updateGiftcardSell()}>
                       Save Sell Rate (<Iconify icon="ic:round-card-giftcard"/>)
                    </Button>
                </CardContent>
          </Card>

         
      
          </Grid>
      </Container>
    </Page>
  );
}
