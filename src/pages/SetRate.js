import { faker } from '@faker-js/faker';
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
  const theme = useTheme();
  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
          Rate Portal.
        </Typography>
      <Grid item xs={12} md={6} lg={8}>
          <Card  style={{marginTop:10}}>
              <CardHeader title="BTC RATE BOARD"/>
                
                <CardContent>
                    <TextField fullWidth label="Set Buy Rate BTC" id="fullWidth"  type="number"  />
                    <Button variant="outlined"  to="#" color="secondary" startIcon={<Iconify icon="arcticons:microsoftauthenticator" /> } style={{marginTop:5,marginBottom:20}}>
                       Save Buy Rate (<Iconify icon="cryptocurrency:btc"/>)
                    </Button>

                    <TextField fullWidth label="Set Sell Rate BTC" id="fullWidth"  type="number"  />
                    <Button variant="outlined"  to="#" color="secondary" startIcon={<Iconify icon="arcticons:microsoftauthenticator" /> } style={{marginTop:5}}>
                       Save Sell Rate (<Iconify icon="cryptocurrency:btc"/>)
                    </Button>
                </CardContent>
          </Card>

          <Card  style={{marginTop:10}}>
              <CardHeader title="USDT RATE BOARD"/>
                  
                <CardContent>
                    <TextField fullWidth label="Set Buy USDT" id="fullWidth"  type="number"  />
                    <Button variant="outlined"  to="#" color="secondary" startIcon={<Iconify icon="arcticons:microsoftauthenticator" /> } style={{marginTop:5,marginBottom:20}}>
                       Save Buy Rate (<Iconify icon="cryptocurrency:usdt"/>)
                    </Button>

                    <TextField fullWidth label="Set Sell USDT" id="fullWidth"  type="number"  />
                    <Button variant="outlined"  to="#" color="secondary" startIcon={<Iconify icon="arcticons:microsoftauthenticator" /> } style={{marginTop:5}}>
                       Save Sell Rate (<Iconify icon="cryptocurrency:usdt"/>)
                    </Button>
                </CardContent>
          </Card>

          <Card  style={{marginTop:10}}>
              <CardHeader title="GIFTCARD RATE BOARD"/>
                  
                <CardContent>
                    <TextField fullWidth label="Set Buy GiftCard" id="fullWidth"  type="number"  />
                    <Button variant="outlined"  to="#" color="secondary" startIcon={<Iconify icon="arcticons:microsoftauthenticator" /> } style={{marginTop:5,marginBottom:20}}>
                       Save Buy Rate (<Iconify icon="ic:round-card-giftcard"/>)
                    </Button>

                    <TextField fullWidth label="Set Sell GiftCard" id="fullWidth"  type="number"  />
                    <Button variant="outlined"  to="#" color="secondary" startIcon={<Iconify icon="arcticons:microsoftauthenticator" /> } style={{marginTop:5}}>
                       Save Sell Rate (<Iconify icon="ic:round-card-giftcard"/>)
                    </Button>
                </CardContent>
          </Card>

         
      
          </Grid>
      </Container>
    </Page>
  );
}
