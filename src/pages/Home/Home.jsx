import React from "react";
import {Typography,Box} from "@mui/material";
import DashboardDetails from '../../components/DashboardDetails/DashboardDetails';
import PersonalDetails from '../../components/PersonalDetails/PersonalDetails';
import PatientObservation from '../../components/PatientObservations/PatientObservations';
import PatientAllergies from '../../components/PatientAllergies/PatientAllergies';
import PatientCondition from '../../components/PatientCondition/PatientCondition';
import MonitoringDevices from '../../components/MonitoringDevices/MonitoringDevices';
import AsideMenu from '../../components/AsideMenu/AsideMenu';

const Home = () => {
    return(
        <Box sx={{display: 'flex', flexDirection: 'row', width: '100%'}}>
            <Box sx={{width: '18%'}}>
                <AsideMenu />
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'column', gap: 5,width: '82%'}}>
                <DashboardDetails />
                <PersonalDetails />
            </Box>
        </Box>
    );    
}

export default Home;