import React from 'react';
import Header from '../../Shared/Header/Header';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Book from '../../Shared/Book/Book';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Footer from '../../Shared/Footer/Footer'
const Shop = () => {
    return (
        <>
        <Header></Header>
        <Container maxWidth="xl" sx={{mt:4}}>
            <Typography variant='h4'>
                100 Books Found 
            </Typography>
            <Box sx={{ flexGrow: 1,my:4 }}>
                <Grid container spacing={{ xs: 2, md: 2 }}>
                    {Array.from(Array(32)).map((_, index) => (
                        <Grid md={2} sx={{mb:2,p:2}}>
                        <Book key={index}></Book>
                        </Grid>
                    ))}
                </Grid>
            </Box>

        <Stack spacing={2} sx={{my:4}}>
            <Pagination count={10} color="primary" />
        </Stack>


        </Container>
        <Footer></Footer>
        </>
    );
};

export default Shop;