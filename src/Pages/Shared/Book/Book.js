import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import book from "../../../asset/book.png"
import {Link} from 'react-router-dom'
import "./Book.css"
const Book = () => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={book}
                sx={{objectFit: "scale-down"}}
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                Book Name
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Category name
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="h2">200$</Button>
                <Link  className='button'  to="/book/details" size="small">Buy Now</Link>
            </CardActions>
    </Card>
    );
};

export default Book;