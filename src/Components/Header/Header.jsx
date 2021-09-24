import React from "react";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';


const Header = () => {
    return(
        <div>
            <Box sx={{ ml: 5, mt: 2, fontFamily: 'Arial', color: 'text.primary', fontSize: 30, fontWeight: 'bold' }}>
                <Typography variant="h4" gutterBottom component="div">
                    Patient Dashboard
                </Typography>
            </Box>
        </div>
    );
}

export default Header;