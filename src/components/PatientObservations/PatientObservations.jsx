import React,{useState, useEffect} from "react";
import {Box,Typography} from "@mui/material";
import axios from 'axios';

const PatientObservation = () => {

    const [data,setData] = useState({});
    var cnt = 0;
    useEffect(() => {
        const newid = JSON.parse(localStorage.getItem('user'));
        axios({
            method: 'POST',
            url: 'https://overseerbackend.herokuapp.com/observations',
            data: {userid:newid.userid}
        })
        .then(res => setData(res.data))
    },[]);

    return(
        <div>
            <Box sx={{ display: 'flex',justifyContent: 'center', width: '100%'}}>
                <Box sx={{width: '60%', display: 'flex',flexDirection: 'column',justifyContent: 'flex-start'}}>
                    <Typography component="div" variant="h5" sx={{fontWeight: 'bold',mb:1}}>Medical Details of the Patient :-</Typography>
                    {
                        data.observation !== undefined && data.observation.map((prop) => {
                            // console.log(prop.observations);
                            return(
                                <Box>
                                    {
                                        (Object.keys(prop.observations).length > 3)?<Typography sx={{mt:3,mb:1,fontWeight: 'bold'}} component="div" variant="h5">Observation {++cnt}</Typography>:<></>
                                    }
                                    {
                                        Object.keys(prop.observations).length > 3 && Object.keys(prop.observations).map((key, i) => {
                                            return(
                                                <Box component="div" variant="h4" key={i}>
                                                    <Typography component="span" sx={{fontSize:'120%',fontWeight:'bolder'}}>{key}: </Typography>
                                                    <Typography component="span" sx={{fontSize:'120%'}} >{prop.observations[key]}</Typography>
                                                </Box>
                                            );
                                        })
                                    }
                                </Box>
                            );
                            
                        })
                    }
                </Box>
            </Box>
        </div>
    );
}

export default PatientObservation;