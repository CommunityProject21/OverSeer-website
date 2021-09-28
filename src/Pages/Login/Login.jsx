import React from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './style.scss';


export default function Login() {
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div className="box1">
            <form action="">
                <div className="box2">
                    <TextField
                        required
                        id="outlined-required"
                        label="Email"
                        defaultValue="Hello World"
                    />
                </div>
                <div className="box2">

                    <TextField
                        required
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                    />
                </div>

                <div className="box2">

                    <Button variant="contained">Login</Button>
                </div>
            </form>
            </div>


        </Box>
    );
}

// function App() {
//   return <Button variant="contained">Hello World</Button>;
// }

// ReactDOM.render(<App />, document.querySelector('#app'));