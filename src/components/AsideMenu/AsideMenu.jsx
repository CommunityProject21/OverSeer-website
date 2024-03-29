import React from 'react';
import {Divider,List,ListItem,ListItemButton,ListItemIcon,ListItemText,Paper,Box} from '@mui/material';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import {AccountCircle,LocalHotel,ReceiptLong,VideoLabel,DoNotTouch,Dns,LocalPharmacy} from '@mui/icons-material';
//import { width } from '@mui/system';
// import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy';

const data = [
    { link: '/home', icon: <AccountCircle />, label: 'Personal Details' },
    { link: '/patient-observation', icon: <Dns />, label: 'Patient Observations' },
    { link: '/patient-allergies', icon: <DoNotTouch />, label: 'Patient Allergies' },
    { link: '/patient-condition', icon: <LocalHotel />, label: 'Patients Conditions' },
    { link: '/patient-devices', icon: <VideoLabel />, label: 'Monitoring Devices' },
    { link: '/medication-records', icon: <ReceiptLong />, label: 'Medication Records' },
    { link: '/self-diagnosis', icon: <LocalPharmacy />, label: 'Self-Diagnosis'}
];
  
const FireNav = styled(List)({
    '& .MuiListItemButton-root': {
        paddingLeft: 24,
        paddingRight: 24,
    },
    '& .MuiListItemIcon-root': {
        minWidth: 0,
        marginRight: 16,
    },
    '& .MuiSvgIcon-root': {
        fontSize: 20,
    },
});

const AsideMenu = () => {
    const [open, setOpen] = React.useState(true);
    return(
        <div style={{position: 'fixed',width: '18%'}}>
            <Box sx={{height: '100vh',width:"100%",backgroundColor: '#012a4a',display: 'flex'}}>
                <Box sx={{ display: 'flex',width: '100%'}}>
                    <ThemeProvider 
                        theme={createTheme({
                        components: {
                            MuiListItemButton: {
                            defaultProps: {
                                disableTouchRipple: true,
                            },
                            },
                        },
                        palette: {
                            mode: 'dark',
                            primary: { main: 'rgb(102, 157, 246)' },
                            background: { paper: 'rgb(5, 30, 52)' },
                        },
                        })}
                    >
                        <Paper elevation={0} sx={{ width: "100%" }}>
                        <FireNav component="nav" disablePadding>
                            <ListItemButton component="a" href="#customized-list">
                                <ListItemText
                                    sx={{ my: 0 }}
                                    primary="OverSeer"
                                    primaryTypographyProps={{
                                    fontSize: 30,
                                    fontWeight: 'medium',
                                    letterSpacing: 0,
                                    }}
                                />
                            </ListItemButton>
                            <Divider />
                            <ListItem component="div" disablePadding>
                                <ListItemButton sx={{ height: 56 }}>
                            
                                    <ListItemText
                                    primary="All Medical Details at One place"
                                    primaryTypographyProps={{
                                        color: 'primary',
                                        fontWeight: 'medium',
                                        variant: 'body2',
                                    }}
                                    />
                                </ListItemButton>
                            </ListItem>
                            <Divider />
                            <Box
                            sx={{
                                bgcolor: open ? 'rgba(71, 98, 130, 0.2)' : null,
                                pb: open ? 2 : 0,
                            }}
                            >
                                <ListItemButton
                                    alignItems="flex-start"
                                    onClick={() => setOpen(!open)}
                                    sx={{
                                    px: 3,
                                    pt: 2.5,
                                    pb: open ? 0 : 2.5,
                                    '&:hover, &:focus': { '& svg': { opacity: open ? 1 : 0 } },
                                    }}
                                >
                                    <ListItemText
                                    primary="Patient Details to Display"
                                    primaryTypographyProps={{
                                        fontSize: 18,
                                        fontWeight: 'medium',
                                        lineHeight: '23px',
                                        mb: 3,
                                    }}
                                    // secondary="Authentication, Firestore Database, Realtime Database, Storage, Hosting, Functions, and Machine Learning"
                                    // secondaryTypographyProps={{
                                    //     noWrap: true,
                                    //     fontSize: 12,
                                    //     lineHeight: '16px',
                                    //     color: open ? 'rgba(0,0,0,0)' : 'rgba(255,255,255,0.5)',
                                    // }}
                                    sx={{ my: 0 }}
                                    />
                                    {/* <KeyboardArrowDown
                                    sx={{
                                        mr: -1,
                                        opacity: 0,
                                        transform: open ? 'rotate(-180deg)' : 'rotate(0)',
                                        transition: '0.2s',
                                    }} 
                                    /> */}
                                </ListItemButton>
                                {open &&
                                    data.map((item) => (
                                        <ListItemButton
                                            component="a" href={item.link}
                                            key={item.label}
                                            sx={{ py: 0, minHeight: 32, color: 'rgba(255,255,255,.8)' }}
                                        >
                                            <ListItemIcon sx={{ color: 'inherit' }}>
                                                {item.icon}
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={item.label}
                                                primaryTypographyProps={{ fontSize: 17, fontWeight: 'medium' }}
                                            />
                                        </ListItemButton>
                                    ))}
                            </Box>
                        </FireNav>
                        </Paper>
                    </ThemeProvider>
                </Box>
            </Box>
        </div>
    );
};

export default AsideMenu;