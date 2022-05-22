import * as React from 'react';
import { reactLocalStorage } from 'reactjs-localstorage';
import axios from 'axios';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { setNestedObjectValues } from 'formik';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



export default function BasicModal({statemodal,modifyOpen,modalTitle,userid}) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(0);
  const handleClose = () => modifyOpen(!statemodal);
  const BaseUrl = process.env.REACT_APP_ADMIN_URL
  const handleCreditWallet = async ()=>{
   
    await axios({
      url:`${BaseUrl}/admin/manual/wallet/credit`,
      method:"POST",
      headers:{
        "Content-type":'application/json',
        "Authorization":reactLocalStorage.get('token')
      },
      data:JSON.stringify({value,modalTitle,userid})

    })
    .then((res)=>{
      console.log(res.data)
    })
    .catch((err)=>{
      console.log(err.response);
    })
  }

  const handeChange= (e)=>{
    setValue(e.target.value)
  }
  return (
    <div>
      <Modal
        open={statemodal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {modalTitle}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <TextField
              required
              id="outlined-required"
              label="Input Wallet Amount To Be creditted"
              defaultValue={value}
              placeholder='Enter BTC Amount'
              fullWidth
              onChange={handeChange}
              type="number"
            />
            <Button variant="outlined" disableElevation style={{marginTop:10}} onClick={()=>handleCreditWallet()}>Credit User Wallet</Button>
            
           
        </Typography>
        </Box>
      </Modal>
    </div>
  );
}
