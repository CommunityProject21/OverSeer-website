import React, {useState,useEffect} from 'react';
import {Box,Typography} from '@mui/material';
import axios from 'axios';

const PersonalDetails = () => {

    //const [id,setid] = useState({})
    const [data,setData] = useState({});

    // useEffect(() => {
    //     localStorage.setItem('user',JSON.stringify({}));
    // },[])

    useEffect(() => {
            const newid = JSON.parse(localStorage.getItem('user'));
            axios({
                method: 'POST',
                url: 'https://overseerbackend.herokuapp.com/details',
                data: {userid:newid.userid},
                headers:{"x-access-token":newid.accesstoken}
            })
            .then(res => setData(res.data))

    },[]);

    return (
        <div>
            <Box sx={{ display: 'flex',justifyContent: 'center', width: '100%'}}>
                <Box sx={{width: '60%', display: 'flex',flexDirection: 'column',justifyContent: 'flex-start'}}>
                    <Typography component="div" variant="h5" sx={{fontWeight: 'bold',mb:4}}>Personal Details of the Patient :-</Typography>
                    <Box sx={{display: 'flex',flexDirection: 'column'}}>
                        <Typography className="addpd" component="div" variant="body1" sx={{fontSize: '115%',mb:1}}>
                            Address of the Patient : {data.address}
                        </Typography>

                        <Typography className="zippd"component="div" variant="body1" sx={{fontSize: '115%',mb:1}}>
                            Zip Code :&nbsp;{data.zipcode}
                        </Typography>

                        <Typography className="genpd" component="div" variant="body1" sx={{fontSize: '115%',mb:1}}>
                            Gender :&nbsp;{data.gender} 
                        </Typography>

                        <Typography className="racpd" component="div" variant="body1" sx={{fontSize: '115%',mb:1}}>
                            Race of the patient :&nbsp;{data.race}
                        </Typography>

                        <Typography className="ethpd" component="div" variant="body1" sx={{fontSize: '115%',mb:1}}>
                            Ethnicity of the patient :&nbsp;{data.ethnicity}
                        </Typography>
                    </Box>                
                </Box>
            </Box> 
        </div>
    );
}

export default PersonalDetails;