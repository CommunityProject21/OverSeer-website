import React,{useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { Grid, TextField, Button, InputAdornment, ButtonGroup, Typography } from "@material-ui/core"
import { AccountCircle, LockRounded } from '@material-ui/icons';
import Box from '@mui/material/Box';
import KeyIcon from '@mui/icons-material/Key';
import axios from 'axios';
import {Stack,ToggleButton,ToggleButtonGroup} from '@mui/material';


export default function Login() {

    const [id,setId] = useState();
    const [password,setPassword] = useState();
    const [data,setData] = useState();
    const history = useNavigate();
    const [alignment, setAlignment] = React.useState('left');

    const handleAlignment = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string,
      ) => {
        setAlignment(newAlignment);
        console.log(newAlignment);
      };

    const handleInputs = (e) => {
        console.log(e.target.value);
        setId(e.target.value);
    }

    const handleInputs1 = (e) => {
        console.log(e.target.value);
        setPassword(e.target.value);
    }

    useEffect(() => {
        localStorage.setItem('user',JSON.stringify({}));
    },[])

    useEffect(() => {
        if(data!==undefined && data.login === true){
            localStorage.setItem('user',JSON.stringify({userid:data.userid,accesstoken:data.token}));
            history('/home');
        }
    },[data]);

  return (
      <Box style={{width:'100%',height:'100vh',display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
          
            <Box sx={{border: '1px solid #000',display: 'flex',flexDirection: 'column',alignItems: 'center',justifyContent: 'center', p: 5 }}>
                <Typography>
                    <img 
                        src="https://cdn-icons-png.flaticon.com/128/2464/2464632.png"
                        width={100}
                        alt="logo"
                    />
                </Typography>
                <Stack style={{marginTop:'5%'}} direction="row" spacing={4}>
                    <ToggleButtonGroup
                        value={alignment}
                        sx={{gap:2}}
                        exclusive
                        onChange={handleAlignment}
                        aria-label="text alignment"
                    >
                        <ToggleButton value="left" aria-label="left aligned">
                            PATIENT
                        </ToggleButton>
                        <ToggleButton value="right" aria-label="right aligned">
                            DOCTOR
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Stack>

                <TextField
                    // sx={{mt: 100}}
                    style={{marginTop: '10%',width:'100%'}}
                    id="input-with-icon-textfield"
                    label="Enter User ID"
                    onChange={handleInputs}
                    InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                        <AccountCircle />
                        </InputAdornment>
                    ),
                    }}
                    variant="standard"
                />
                <TextField
                    style={{marginTop: '10%',width:'100%'}}
                    id="input-with-icon-textfield"
                    label="Password"
                    type='password'
                    onChange={handleInputs1}
                    InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                        <KeyIcon />
                        </InputAdornment>
                    ),
                    }}
                    variant="standard"
                />
                <Box sx={{mt:5}}>
                        <Button sx={{ justifiedContent: 'center' }} color='primary' variant='contained'
                            onClick={async() => {
                                await axios({
                                    method: 'POST',
                                    url: 'https://overseerbackend.herokuapp.com/login',
                                    data: {
                                        userid:id,
                                        password:password,
                                        usertype:(alignment==='left')? 'P':'D'
                                    }
                                })
                                .then(res => setData(res.data))
                                .catch((error)=>{
                                    setData({login:false})
                                })
                            }}
                        >
                            Log in
                        </Button>
                </Box>
                <Box sx={{mt:3,color: 'red'}}>
                    {(data !== undefined && data.login === false)? 'Wrong Credentials':''}
                </Box>
            </Box>

      </Box>
  );
}