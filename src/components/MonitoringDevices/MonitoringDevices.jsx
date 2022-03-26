import React,{useState, useEffect} from 'react';
import {Typography,Box} from '@mui/material';
import axios from 'axios';

const MonitoringDevices = () => {

    const [data,setData] = useState({});

    useEffect(() => {
        const newid = JSON.parse(localStorage.getItem('user'));
        axios({
            method: 'POST',
            url: 'https://overseerbackend.herokuapp.com/implants',
            data: {userid:newid.userid}
        })
        .then(res => setData(res.data))
    },[]);

    return(
        <div>
            <Box sx={{ display: 'flex',justifyContent: 'center', width: '100%'}}>
                <Box sx={{width: '60%', display: 'flex',flexDirection: 'column',justifyContent: 'flex-start'}}>
                    <Typography component="div" variant="h5" sx={{fontWeight: 'bold',mb:4}}>Monitoring devices/Implants for the Patient :-</Typography>
                    {
                        data.devices !== undefined && data.devices.map((prop)=>{
                            return(
                                <Box sx={{mb: 5,display: 'flex',flexDirection: 'column'}}>
                                    <Typography className="addpd" component="div" variant="body1" sx={{fontSize: '115%',mb:1}}>
                                        ID : {prop.id}
                                    </Typography>
                                    <Typography className="zippd"component="div" variant="body1" sx={{fontSize: '115%',mb:1}}>
                                        Name :&nbsp;{prop.name}
                                    </Typography>
                                </Box>
                            );
                        })
                    }
                </Box>
            </Box>
        </div>
    );
};

export default MonitoringDevices;