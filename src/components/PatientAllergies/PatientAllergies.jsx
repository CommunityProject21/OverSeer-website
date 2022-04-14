import React,{useState, useEffect} from "react";
import { Typography, Box } from "@mui/material";
import axios from 'axios';

const PatientAllergies = () => {

    const [data,setData] = useState({});

    useEffect(() => {
        const newid = JSON.parse(localStorage.getItem('user'));
        axios({
            method: 'POST',
            url: 'https://overseerbackend.herokuapp.com/allergies',
            data: {userid:newid.userid}
        })
        .then(res => setData(res.data))
    },[]);

    return(
        <div>
            <Box sx={{ display: 'flex',justifyContent: 'center', width: '100%'}}>
                <Box sx={{width: '60%', display: 'flex',flexDirection: 'column',justifyContent: 'flex-start'}}>
                    <Typography component="div" variant="h5" sx={{fontWeight: 'bold',mb:4}}>Allergies Suffered by the Patient :-</Typography>
                    {
                        (data.allergies !== undefined && data.message !== "No allergies to Report for given ID.")?
                        data.allergies.map((prop)=>{
                            return(
                                <Box sx={{mb: 5,display: 'flex',flexDirection: 'column'}}>
                                    <Typography className="addpd" component="div" variant="body1" sx={{fontSize: '115%',mb:1}}>
                                        <b>Allergy :</b> {prop.allergy}
                                    </Typography>

                                    <Typography className="zippd"component="div" variant="body1" sx={{fontSize: '115%',mb:1}}>
                                        Start :&nbsp;{prop.start}
                                    </Typography>

                                    <Typography className="genpd" component="div" variant="body1" sx={{fontSize: '115%',mb:1}}>
                                        Stop :&nbsp;{prop.stop} 
                                    </Typography>
                                </Box>
                            );
                        }):<Box sx={{mb: 5,display: 'flex',flexDirection: 'column'}}>
                            <Typography className="addpd" component="div" variant="body1" sx={{fontSize: '115%',mb:1}}>
                                <b>Allergy :</b> {data.message}
                            </Typography>
                        </Box>
                    }
                </Box>
            </Box>
        </div>
    );
};

export default PatientAllergies;