import React from 'react';
import Header from '../../Shared/Header/Header';
import Container from '@mui/material/Container';
import { Typography,Box } from '@mui/material';
import Footer from '../../Shared/Footer/Footer'
import "./About.css"
const About = () => {
    return (
        
        <>
           <Header></Header>
        <Container maxWidth="xl" sx={{mt:4}}>
            <Box className="about">
            <Typography variant='h4' style={{fontWeight: 700,textAlign: 'center'}} sx={{mb:4}}>
                About <span style={{color:"#1976d2"}}>US</span>
            </Typography>
            <Typography variant='p' className="about-description" style={{textAlign: 'judtify'}} sx={{mb:2}}>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </Typography>
            <br/><br/>
            <Typography variant='p' className="about-description" style={{textAlign: 'justify'}} sx={{mb:4}}>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </Typography>
            </Box>
            <br/><br/>


        </Container>
        <Footer></Footer>
        </>
    );
};

export default About;