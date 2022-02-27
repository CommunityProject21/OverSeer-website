import React from "react";
// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
import './style.scss';
import { Link } from 'react-router-dom';
import { Grid, TextField, Button, InputAdornment, ButtonGroup } from "@material-ui/core"
import { AccountCircle, LockRounded } from '@material-ui/icons';
import Box from '@mui/material/Box';


export default function Login() {
  return (
      <div style={{
          // backgroundImage: `url("https://cdn.wallpapersafari.com/31/82/cyBn5z.jpg")` 
      }}>
          <Box className='BoxShadow'>
              <Grid container style={{ minHeight: "100vh" }}>

                  <Grid
                      container
                      item
                      xs={12}
                      sm={12}
                      alignItems='center'
                      direction='column'
                      justify='space-between'
                      style={{ padding: 10 }}
                  >
                      <Box
                          className='box2'
                          sx={{ boxShadow: 3 }}
                          style={{
                              padding: 50,
                              marginTop: 60
                          }}
                      >
                          <div />
                          <div
                              style={{
                                  display: 'flex',
                                  flexDirection: 'column',
                                  maxWidth: 400,
                                  minWidth: 300,
                              }}
                          >
                              <Grid container justify='center'>
                                  <img
                                      src="https://cdn-icons-png.flaticon.com/128/2464/2464632.png"
                                      width={100}
                                      alt="logo"
                                  />
                              </Grid>
                              <div style={{ height: 25 }} />
                              <Grid container justify="center" spacing={10}>
                                  <Grid item>
                                      <ButtonGroup variant='container'>
                                          <Button color='primary'>Patient Login</Button>
                                          <Button>Doctor Login</Button>
                                      </ButtonGroup>
                                  </Grid>
                              </Grid>
                              <div style={{ height: 10 }} />
                              <TextField
                                  label='UserName'
                                  margin='normal'
                                  InputProps={{
                                      startAdornment: (
                                          <InputAdornment position="start">
                                              <AccountCircle />
                                          </InputAdornment>
                                      )
                                  }}
                              />
                              <TextField
                                  type='password'
                                  label='Password'
                                  margin='normal'
                                  InputProps={{
                                      startAdornment: (
                                          <InputAdornment position="start">
                                              <LockRounded />
                                          </InputAdornment>
                                      )
                                  }}
                              />
                              <div style={{ height: 20 }} />
                              {/* <Link to='/Home'><button className="w-100 btn btn-lg btn-primary btn1" type="submit">Login</button></Link> */}
                              <Link to='/Home'><Button color='secondary' variant='contained'>
                                  Log in
                              </Button></Link>
                              {/* <Button color='secondary' variant='contained'>
                                  Log in
                              </Button> */}
                              <div style={{ height: 20 }} />
                              <Button>
                                  Forgot Password
                              </Button>
                          </div>
                      </Box>
                  </Grid>

              </Grid>
          </Box>
      </div>
  );
}


// .........................................................................................................................................

// export default function Login() {
//     return (
//         <>
//         <form>
//                     <div className="container-fluid justify-content-center body2 my-4">
//                       <div className="card text-center ">
//                         <div className="card-header">
//                           Login
//                         </div>
//                         <div className="body22">
//                         <img className="mb-4 img1" src="https://www.seekpng.com/png/detail/975-9751687_naruto-clipart-head-naruto-leaf-symbol.png" alt="" width="72" height="57" />
//                         <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

//                         <div className="form-floating">
//                           <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
//                           <label for="floatingInput">Email address</label>
//                         </div>
//                         <br />
//                         <div className="form-floating">
//                           <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
//                           <label for="floatingPassword">Password</label>
//                         </div>
//                         <br />
//                         <div className="checkbox mb-3">
//                           <label>
//                             <input type="checkbox" value="remember-me" /> Remember me
//                           </label>
//                         </div>
//                         <Link to='/Home'><button className="w-100 btn btn-lg btn-primary btn1" type="submit">Login</button></Link>
//                         {/* <div><Link to='/page1'><button>Page1</button></Link></div> */}
//                         {/* <p className="mt-5 mb-3 text-muted">© 2022–2025</p> */}
//                         </div>
//                       </div>
//                     </div>
//                   </form>
//         {/* <div classname="box3">
//             <Box
//       sx={{ bgcolor: 'text.secondary' },{border:10},{borderRadius:20}
//       }
//       width={200}
//       height={200}
//       style={{ marginTop: 300, marginLeft: 300 }}
// ></Box>
//         <Box
//             component="form"
//             sx={{
//                 '& .MuiTextField-root': { m: 1, width: '25ch' },
//             }}
//             noValidate
//             autoComplete="off"
            
//         >
//             <div className="box2">
//             <form action="">
//                 <div className="box1">
//                     <TextField
//                         required
//                         id="outlined-required"
//                         label="Email"
//                         defaultValue="Hello World"
//                     />
//                 </div>
//                 <div className="box1">

//                     <TextField
//                         required
//                         id="outlined-password-input"
//                         label="Password"
//                         type="password"
//                         autoComplete="current-password"
//                     />
//                 </div>

//                 <div className="box1">
//                     <Button variant="contained">Login</Button>
//                 </div>
//             </form>
//             </div>


//         </Box>
//         </div> */}
//         </>
//     );
// }

// // function App() {
// //   return <Button variant="contained">Hello World</Button>;
// // }

// // ReactDOM.render(<App />, document.querySelector('#app'));