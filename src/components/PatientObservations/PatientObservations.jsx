import React,{useState, useEffect} from "react";
import {Box,Typography} from "@mui/material";
import axios from 'axios';

const PatientObservation = () => {

    const [data,setData] = useState({});

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
                    <Typography component="div" variant="h5" sx={{fontWeight: 'bold',mb:4}}>Medical Details of the Patient :-</Typography>
                    {
                        data.observation !== undefined && data.observation.map(prop => {
                            return (
                                <Box sx={{display: 'flex',flexDirection: 'column'}}>

                                    {
                                        prop.observations.length > 3 && Object.keys(prop.observations).map((key, i) => {
                                            return (
                                                <p key={i}>
                                                    <span>Key Name: {key}</span>
                                                    <span>Value: {prop.observations[key]}</span>
                                                </p>
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