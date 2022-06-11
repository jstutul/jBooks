import React from 'react';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import cats from "../../../asset/cats.png"
import {Link} from 'react-router-dom'
const PopularCategory = () => {
    return (
        <>
        <Container maxWidth="xl">
            <Typography variant='h5'>
                    Popular Category<Link style={{ fontSize: "17px"}}>see all</Link>
            </Typography>
            <Box sx={{ flexGrow: 1,my:4 }}>
                <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {Array.from(Array(12)).map((_, index) => (
                    <Grid item xs={2} sm={6} md={2} key={index}>
                        <Paper
                            
                            sx={{
                            height: 140,
                            display:'flex',
                            width: '100%',
                            alignItems:'center',
                            backgroundColor: (theme) =>
                                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                            }}
                        >
                         <Grid>
                         <img src={cats}  alt="category" style={{width: "100px",height: "100px"}}/>
                         </Grid>   
                        <Grid>
                        <Typography variant='h6'>
                           Category Name
                        </Typography>
                        </Grid>
                       
                        </Paper>
                    </Grid>
                    ))}
                </Grid>
            </Box>

        </Container>
            
        </>
    );
};

export default PopularCategory;