import React, {useState} from "react";
import Multiselect from "multiselect-react-dropdown";
import {Typography,Box,Button} from '@mui/material';
import data from "./data";
import axios from "axios";


const SelfDiagnosis = () => {

    const [disdata,setDisdata] = useState([])

    return(
        <Typography sx={{display: 'flex',justifyContent: 'center', alignItems: 'center', gap: 2}}>
            <Box sx={{width: '70%'}} >
                <Multiselect
                    // displayValue="key"
                    isObject = {false}
                    onKeyPressFn={function noRefCheck(){}}
                    onRemove={ (e) => setDisdata(e)}
                    onSearch={function noRefCheck(){}}
                    onSelect={ (e) => setDisdata(e)}
                    options={data}
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
        
                    }).then(res => console.log(res.data))
                }}
            >
                search
            </Button>
        </Typography>
    );
}

export default SelfDiagnosis;