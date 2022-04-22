import React, {useState, useEffect} from 'react';
import {Box,Typography,Button,Link,TextField} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
//import { style } from '@mui/system';

const DashboardDetails = () => {

    const [data,setData] = useState({});
    const [userid,setUserid] = useState('');
    const [displayid,setdisplayid] = useState('');
    const [doc,setDoc] = useState(false);

    const handleInputs = (e) =>{
        console.log(e.target.value);
        setUserid(e.target.value);
    };

    // useEffect(() => {
        // localStorage.setItem('user',JSON.stringify({}));
    // },[])

    useEffect(() => {
            const newid = JSON.parse(localStorage.getItem('user'));
            // const headers = {
            //     "Authorization":`${newid.accesstoken}`,
            //     "Access-Control-Allow-Credentials": true,
            //     "Access-Control-Allow-Origin": true,
            //     // 'Content-Type': 'application/json',
            // }

            // const headers = {
            //     'Authorization': `Bearer ${newid.accesstoken}`
            //   }

            //const data = {userid:newid.userid}
            (newid.userType === 'D')? setDoc(true):setDoc(false);

            //console.log(headers);
            axios({
                method: 'POST',
                url: 'https://overseerbackend.herokuapp.com/details',
                data: {userid:newid.userid},
                // headers: headers

            }).then(res => setData(res.data))

            // axios.post('https://overseerbackend.herokuapp.com/details', data, {
            //     headers: {
            //         "Access-Control-Allow-Origin" : "*",
            //         "Content-type": "Application/json",
            //         "Authorization": `Bearer ${newid.accesstoken}`
            //         }   
            // }).then(res => setData(res))
            // .then(res => console.log(res))

            setUserid(newid.userid);
            //console.log(data);
    },[displayid]);


    return(
        <div>
            <Box sx={{width: '100%'}}>
                <Typography variant="h4" component="div" gutterBottom sx={{fontWeight: 900,m:2,ml:3,color: '#6c757d',display: 'flex',justifyContent: 'space-between'}}>
                    OverSeer DashBoard
                    <Link style={{textDecoration: 'none'}} href='/'><Button variant="outlined">LOG OUT</Button></Link>
                </Typography>
            </Box>
            
            {
                (doc !== undefined && doc)? 
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '47%' },
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        mt: 10,
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField 
                        sx={{backgroundColor: '#fff', borderColor: '#000', borderRadius: 2}}
                        id="outlined-search" 
                        label="Enter the Patient ID" 
                        type="search"
                        value={(userid.length > 5)? userid:''}
                        onChange={handleInputs} 
                    />
                    <Button onClick={() => {
                            setdisplayid(userid);
                            localStorage.setItem('user',JSON.stringify({userid:userid,userType:"D"}));
                            }
                        } 
                        href="/home"
                        variant="contained" 
                        size="large" 
                        sx={{ my:1.2, fontSize: 'large', fontWeight: 'bold'}} 
                        startIcon={<SearchIcon />}
                    >
                        Search
                    </Button>
                </Box>:<></>
            }

            <Box sx={{display: 'flex', gap: 1, flexDirection: 'column', mt: 3, alignItems: 'center', }}>
                <Box sx={{display: 'flex', width: '55%', }}>
                    <Typography sx={{ px: 2, fontSize: '120%'}} style={{fontWeight: '900'}}>
                        Patient ID :
                    </Typography>
                    <Typography sx={{ fontSize: '120%',fontWeight: 'medium' }}>
                        {(userid.length > 5)? userid:''}
                    </Typography>
                </Box>
                <Box sx={{display: 'flex', width: '55%', }}>
                    <Typography sx={{ px: 2, fontSize: '120%'}} style={{fontWeight: '900'}}>
                        Patient Name :
                    </Typography>
                    <Typography sx={{ fontSize: '120%',fontWeight: 'medium' }}>
                        {data.name}
                    </Typography>
                </Box>
            </Box>
        </div>
    );
}

export default DashboardDetails;