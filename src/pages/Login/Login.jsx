import React,{useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { Grid, TextField, Button, InputAdornment, ButtonGroup, Typography } from "@material-ui/core"
import { AccountCircle, LockRounded } from '@material-ui/icons';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import KeyIcon from '@mui/icons-material/Key';
import axios from 'axios';


export default function Login() {

    const [id,setId] = useState();
    const [password,setPassword] = useState();
    const [data,setData] = useState({login:false});
    const history = useNavigate();

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
        if(data.login === true){
            localStorage.setItem('user',JSON.stringify({userid:data.userid,accesstoken:data.token}));
            history('/home');
        }
    },[data]);

  return (
      <Box style={{width:'100%',height:'100vh',display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
          
            <Box sx={{border: '1px solid #000',display: 'flex',flexDirection: 'column',alignItems: 'center',justifyContent: 'center',padding: '3%'}}>
                <Typography>
                    <img 
                        src="https://cdn-icons-png.flaticon.com/128/2464/2464632.png"
                        width={100}
                        alt="logo"
                    />
                </Typography>
                <Box sx={{backgroundColor: '#edf2f4',p: 1,mt:1}}>
                    PATIENT LOGIN
                </Box>

                <TextField
                    // sx={{mt: 100}}
                    style={{marginTop: '10%'}}
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
                    style={{marginTop: '10%'}}
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
                                        usertype:"P"
                                    }
                                })
                                .then(res => setData(res.data));
                            }}
                        >
                            Log in
                        </Button>
                </Box>
            </Box>

      </Box>
  );
}