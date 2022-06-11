import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import banner from "../../../asset/banner.png"
import { Typography,Button } from '@mui/material';
import Container from '@mui/material/Container';
import "./SliderImage.css"
const SliderImage = () => {
    return (
        <>
         <Container maxWidth="xl">
            <Box sx={{ flexGrow: 1,my:4 }} spacing={3}> 
                <Grid container spacing={2} sx={{justifyContent:'center'}}>
                   
                    <Grid item xs={12} md={6} sx={{p:4,mb:2}}>
                    <Typography variant='h3' style={{    padding: "30px 0",fontWeight: "600",color:'#2870d7'}}>
                        ONLINE BOOKS
                    </Typography>
                    <Typography variant='p' style={{marginTop:'10px',lineHeight: 1.7,fontSize: "25px"}}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </Typography>
                    <br/>
                    <Button variant="contained" sx={{my:4}}>Read Now</Button>
                    </Grid>
                    <Grid item xs={12} md={6} className="bannerimg">
                    <img src={banner} alt="banner"/>
                    </Grid>
                </Grid>
            </Box>
            </Container>
        </>
    );
};

export default SliderImage;