import React from "react";
import DashboardDetails from '../../components/DashboardDetails/DashboardDetails';
import PersonalDetails from '../../components/PersonalDetails/PersonalDetails';
import PatientObservation from '../../components/PatientObservations/PatientObservations';
import PatientAllergies from '../../components/PatientAllergies/PatientAllergies';
import PatientCondition from '../../components/PatientCondition/PatientCondition';
import MonitoringDevices from '../../components/MonitoringDevices/MonitoringDevices';

const Home = () => {
    return(
        <div style={{display: 'flex', flexDirection: 'column', gap: 25}}>
            <DashboardDetails />
            <MonitoringDevices />
        </div>
    );    
}

export default Home;