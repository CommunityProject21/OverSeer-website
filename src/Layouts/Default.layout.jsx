import React from 'react';
import {Box} from '@mui/material';

//importing Remain same components
import AsideMenu from '../components/AsideMenu/AsideMenu';
import DashboardDetails from '../components/DashboardDetails/DashboardDetails';

const DefaultLayout = (props) => {
    return(
        <>
            <Box sx={{display: 'flex', flexDirection: 'row', width: '100%'}}>
                <Box sx={{width: '18%'}}>
                    <AsideMenu />
                </Box>
                <Box sx={{display: 'flex', flexDirection: 'column', gap: 5,width: '82%'}}>
                    <DashboardDetails />
                    {props.children}
                </Box>
            </Box>
        </>
    );
}

export default DefaultLayout;