import React, {useState, useEffect} from 'react';
import {Box,Typography,TextField,Button} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
//import { display } from '@mui/system';

const DashboardDetails = () => {
    const [userid,setUserid] = useState('');
    const [displayid,setdisplayid] = useState('');
    const [name,setName] = useState('');

    const handleInputs = (e) =>{
        console.log(e.target.value);
        setUserid(e.target.value);
    };

    useEffect(() => {
        if(displayid!==''){
            axios({
                method: 'POST',
                url: 'https://overseerbackend.herokuapp.com/details',
                data: {userid:displayid}
            }).then(res => setName(res.data.name))
        }
    },[displayid]);


    return(
        <div>
            <Box sx={{width: '100%'}}>
                <Typography variant="h4" component="div" gutterBottom sx={{fontWeight: 900,m:2,ml:3,color: '#6c757d'}}>
                    OverSeer DashBoard
                </Typography>
            </Box>
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
                     value={userid}
                     onChange={handleInputs} 
                 />
                 <Button onClick={() => setdisplayid(userid)} variant="contained" size="large" sx={{ my:1.2, fontSize: 'large', fontWeight: 'bold'}} startIcon={<SearchIcon />}>Search</Button>
            </Box>
            <Box sx={{display: 'flex', gap: 1, flexDirection: 'column', mt: 3, alignItems: 'center', }}>
                 <Box sx={{display: 'flex', width: '55%', }}>
                     <Typography sx={{ px: 2, fontSize: '120%'}} style={{fontWeight: '900'}}>
                         Patient ID :
                     </Typography>
                     <Typography className="piddd" sx={{ fontSize: '120%',fontWeight: 'medium' }}>
                         {displayid}
                     </Typography>
                 </Box>
                 <Box sx={{display: 'flex', width: '55%', }}>
                     <Typography sx={{ px: 2, fontSize: '120%'}} style={{fontWeight: '900'}}>
                         Patient Name :
                     </Typography>
                     <Typography className= "pnamedd" sx={{ fontSize: '120%',fontWeight: 'medium' }}>
                         {name}
                     </Typography>
                 </Box>
            </Box>
        </div>
    );
}

export default DashboardDetails;