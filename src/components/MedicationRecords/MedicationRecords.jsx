import React,{useState, useEffect} from 'react';
import {Box,Typography} from '@mui/material';
import axios from 'axios';

const MedicationRecords = () => {

    const [data,setData] = useState([]);

    useEffect(() => {
        const newid = JSON.parse(localStorage.getItem('user'));
        axios({
            method: 'POST',
            url: 'https://overseerbackend.herokuapp.com/medications',
            data: {userid:newid.userid}
        })
        .then(res => setData(res.data))
        .then(res => console.log(res.data));
    },[]);

    return (
        <div>
            <Box sx={{ display: 'flex',justifyContent: 'center', width: '100%'}}>
                <Box sx={{width: '60%', display: 'flex',flexDirection: 'column',justifyContent: 'flex-start'}}>
                    <Typography component="div" variant="h5" sx={{fontWeight: 'bold',mb:4}}>Medication Records of the Patient :-</Typography>
                    {data.medications!=undefined && data.medications.map((prop)=>{
                        return(
                            <Box sx={{mb: 5,display: 'flex',flexDirection: 'column'}}>
                            <Typography className="addpd" component="div" variant="body1" sx={{fontSize: '115%',mb:1}}>
                            <b>Name :</b> {prop.name}
                            </Typography>

                            <Typography className="zippd"component="div" variant="body1" sx={{fontSize: '115%',mb:1}}>
                            <b>Prescription :</b> &nbsp;{prop.prescription}
                            </Typography>

                            <Typography className="genpd" component="div" variant="body1" sx={{fontSize: '115%',mb:1}}>
                            Start :&nbsp;{prop.start}
                            </Typography>

                            <Typography className="racpd" component="div" variant="body1" sx={{fontSize: '115%',mb:1}}>
                            Stop :&nbsp;{prop.stop}
                            </Typography>
                            </Box>
                        );
                    })}            
                </Box>
            </Box> 
        </div>
    );
}

export default MedicationRecords;