
import * as React from 'react';
import {Grid} from '@mui/material';
import Typography from '@mui/material/Typography';

const Footer = () => {
    return (
        <Grid sx={{p:4}} style={{background:"#00000040"}}>
        <Typography variant='body2' style={{color:'white',textAlign:'center'}}>
        © 2022 ColibriWP Blog. Built using WordPress.
        </Typography>
    </Grid>
    );
};

export default Footer;

