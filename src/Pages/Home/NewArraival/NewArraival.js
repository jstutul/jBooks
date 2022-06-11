import React from 'react';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {Link} from 'react-router-dom'
import Book from '../../Shared/Book/Book';
const NewArraival = () => {
    return (
        <> 
        <Container maxWidth="xl">
            <Typography variant='h5'>
                New Arraival <Link style={{ fontSize: "17px"}}>see all</Link>
            </Typography>
            <Box sx={{ flexGrow: 1,my:4 }}>
                <Grid container spacing={{ xs: 2, md: 2 }}>
                    {Array.from(Array(12)).map((_, index) => (
                        <Grid md={2} sx={{mb:2,p:2}}>
                        <Book key={index}></Book>
                        </Grid>
                    ))}
                </Grid>
            </Box>

        </Container>

        </>
    );
};

export default NewArraival;