import React, {useState} from "react";
import Multiselect from "multiselect-react-dropdown";
import {Typography,Box,Button} from '@mui/material';
import diseases from "./data";
import axios from "axios";


const SelfDiagnosis = () => {

    const [data,setData] = useState();
    const [disdata,setDisdata] = useState([]);

    return(
        <Box sx={{width: '100%', display: 'flex', flexDirection: 'column'}}>
            <Typography component="div" variant="h5" sx={{alignSelf:'center',fontWeight: 'bold',mb:4}}>Self Diagnosis for the Patient</Typography>
            <Typography component="div" sx={{display: 'flex',justifyContent: 'center', alignItems: 'center', gap: 2}}>
                <Box sx={{width: '70%'}} >
                    <Multiselect
                        // displayValue="key"
                        isObject = {false}
                        onKeyPressFn={function noRefCheck(){}}
                        onRemove={ (e) => setDisdata(e)}
                        onSearch={function noRefCheck(){}}
                        onSelect={ (e) => setDisdata(e)}
                        options={diseases}
                    />
                </Box>
                <Button 
                    variant="contained" 
                    size="medium" 
                    onClick = { () => {
                        axios({
                            method: 'POST',
                            url: 'https://overseerbackend.herokuapp.com/predictions',
                            data: {symptoms:disdata},
                            // headers: headers
            
                        }).then(res => setData(res.data))
                    }}
                >
                    search
                </Button>
            </Typography>
            {
                (data !== undefined)?
                        <Box sx={{display: 'flex',flexDirection: 'column',px:16,mt:5}}>
                            <Typography sx={{mb:2,fontSize: '130%',fontWeight:'bolder'}}> Prediction : &nbsp;&nbsp; {data.prediction}</Typography>
                            <Typography sx={{fontSize: '120%',fontWeight:'bolder'}}> Recommendations : &nbsp;&nbsp; {data.recommendations}</Typography>
                        </Box>
                :<></>
            }
        </Box>
    );
}

export default SelfDiagnosis;