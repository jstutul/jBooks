import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Typography,Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import {Link} from "react-router-dom"
import fb from "../../asset/facebook.svg";
import git from "../../asset/github.svg";
import gog from "../../asset/google.svg";
import './Signup.css'
const svgStyle={
    width: "40px",
    height: "40px"
}



const Signup = () => {
    return (
        <>
        <Grid sm={12} md={12} style={{margin:"0 auto" }} sx={{p:5}} container>
               
               <Grid item xs={12} md={4} boxShadow={4} sx={{p:5}}  style={{margin:"0 auto"}}>
                   <Stack spacing={2} sx={{mb:4}}>
                       <Typography variant='h4' >
                           Login Page
                       </Typography>
                       <TextField id="standard-basic" label="Full Name" variant="standard" />
                       <TextField id="standard-basic" label="Email" variant="standard" />
                       <TextField id="standard-basic" label="Password" variant="standard" />
                       <TextField id="standard-basic" label="Confirm Password" variant="standard" />
                       <Button variant="contained">Login</Button>
                   </Stack>
                   <Grid container spacing={1}>
                        <Grid item xs={6}>
                            <Typography variant='small'>
                                <Link className='btn-a' to="/login">Login page</Link>  
                            </Typography>
                        </Grid>
                    </Grid>

                   
                  
                   <Grid container spacing={1} style={{ justifyContent:'center' }}sx={{mt:4,textAlign:'center'}}>
                        <Grid item xs={2}>
                           <Button>
                           <img style={svgStyle} src={fb} alt="fb" />
                           </Button>
                        </Grid>
                        <Grid item xs={2}>
                            <Button>
                            <img style={svgStyle} src={gog} alt="google" />
                            </Button>
                        </Grid>
                        <Grid item xs={2}>
                            <Button>
                            <img style={svgStyle} src={git} alt="github" />
                            </Button>
                        </Grid>
                    </Grid>

               </Grid>
                  
        </Grid>   
    </>
    );
};

export default Signup;