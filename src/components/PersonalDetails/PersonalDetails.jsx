import React from 'react';
import {Box,Typography} from '@mui/material';

const PersonalDetails = () => {
    return (
        <div>
            <Box sx={{ display: 'flex',justifyContent: 'center', width: '100%'}}>
                <Box sx={{width: '55%', display: 'flex',flexDirection: 'column'}}>
                    <Typography component="div" variant="h5" sx={{fontWeight: 'bold'}}>Personal Details of the Patient :-</Typography>
                </Box>
            </Box> 
        </div>
    );
}

export default PersonalDetails;