import React from "react";
import { Typography, Box } from "@mui/material";

const PatientAllergies = () => {
    return(
        <div>
            <Box sx={{ display: 'flex',justifyContent: 'center', width: '100%'}}>
                <Box sx={{width: '60%', display: 'flex',flexDirection: 'column',justifyContent: 'flex-start'}}>
                    <Typography component="div" variant="h5" sx={{fontWeight: 'bold',mb:4}}>Allergies Suffered by the Patient :-</Typography>
                    {/* <Box sx={{display: 'flex',flexDirection: 'column'}}>
                        <Typography className="addpd" component="div" variant="body1" sx={{fontSize: '115%',mb:1}}>Address of the Patient : 1060 Hansen Overpass Suite 86, Boston, Massachusetts, Suffolk County</Typography>

                        <Typography className="zippd"component="div" variant="body1" sx={{fontSize: '115%',mb:1}}>Zip Code :&nbsp;500008</Typography>

                        <Typography className="genpd" component="div" variant="body1" sx={{fontSize: '115%',mb:1}}>Gender :&nbsp;Male </Typography>

                        <Typography className="racpd" component="div" variant="body1" sx={{fontSize: '115%',mb:1}}>Race of the patient :&nbsp;White</Typography>

                        <Typography className="ethpd" component="div" variant="body1" sx={{fontSize: '115%',mb:1}}>Ethnicity of the patient :&nbsp;nonhispanic</Typography>
                    </Box> */}
                </Box>
            </Box>
        </div>
    );
};

export default PatientAllergies;