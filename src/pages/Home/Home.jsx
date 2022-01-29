import React from "react";
import DashboardDetails from '../../components/DashboardDetails/DashboardDetails'
import PersonalDetails from '../../components/PersonalDetails/PersonalDetails'

const Home = () => {
    return(
        <div style={{display: 'flex', flexDirection: 'column', gap: 25}}>
            <DashboardDetails />
            <PersonalDetails />
        </div>
    );    
}

export default Home;