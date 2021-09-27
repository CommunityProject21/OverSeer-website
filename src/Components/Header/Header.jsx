import React from "react";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';


const Header = () => {
    return(
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <Box sx={{ ml: 10, mt: 2, fontFamily: 'Roboto', color: 'text.primary', fontSize: 30, fontWeight: 'fontWeightBold' }}>
                <Typography variant="h4" gutterBottom component="div" style={{fontWeight: '900', color: '#78909c'}}>
                    Patient Dashboard
                </Typography>
            </Box>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '75ch' },
                    display: 'flex',
                    justifyContent: 'center',
                    mt: 5,
                }}
                noValidate
                autoComplete="off"
            >
                <TextField 
                    sx={{backgroundColor: '#fff', borderColor: '#000', borderRadius: 2}}
                    id="outlined-search" 
                    label="Enter the Patient ID" 
                    type="search" 
                />
            </Box>
            <Box sx={{display: 'flex', gap: 1, flexDirection: 'column', mt: 3, alignItems: 'center', }}>
                <Box sx={{display: 'flex', width: '75ch', }}>
                    <Typography sx={{ px: 2, }} style={{fontWeight: '900'}}>
                        Patient ID :
                    </Typography>
                    <Typography sx={{ fontWeight: 'medium' }}>
                        value id
                    </Typography>
                </Box>
                <Box sx={{display: 'flex', width: '75ch', }}>
                    <Typography sx={{ px: 2, }} style={{fontWeight: '900'}}>
                        Patient Name :
                    </Typography>
                    <Typography sx={{ fontWeight: 'medium' }}>
                        value name
                    </Typography>
                </Box>
            </Box>
        </div>
    );
}

export default Header;