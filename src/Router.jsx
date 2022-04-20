import React from "react";
import { BrowserRouter as BRouter, Route, Routes } from "react-router-dom";
import PersonalDetails from "./components/PersonalDetails/PersonalDetails";
import PatientObservation from './components/PatientObservations/PatientObservations';
import PatientAllergies from './components/PatientAllergies/PatientAllergies';
import PatientCondition from './components/PatientCondition/PatientCondition';
import MonitoringDevices from './components/MonitoringDevices/MonitoringDevices';
import Medication from './components/MedicationRecords/MedicationRecords';
import SelfDiagnosis from './components/SelfDiagnosis/SelfDiagnosis';
import Login from "./pages/Login/Login";
import DefaultLayout from "./Layouts/Default.layout";


export default function Router() {
    return(
        <BRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/home' element={<DefaultLayout><PersonalDetails /></DefaultLayout>} />
                <Route path='/patient-observation' element={<DefaultLayout><PatientObservation /></DefaultLayout>} />
                <Route path='/patient-allergies' element={<DefaultLayout><PatientAllergies /></DefaultLayout>} />
                <Route path='/patient-condition' element={<DefaultLayout><PatientCondition /></DefaultLayout>} />
                <Route path='/patient-devices' element={<DefaultLayout><MonitoringDevices /></DefaultLayout>} />
                <Route path='/medication-records' element={<DefaultLayout><Medication /></DefaultLayout>} />
                <Route path='/self-diagnosis' element={<DefaultLayout><SelfDiagnosis /></DefaultLayout>} />
            </Routes>
        </BRouter>
    );
}