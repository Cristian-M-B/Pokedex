import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Button } from '@material-ui/core';
import '../styles/animations.css';

export default function Landing() {
    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            style={{ height: '100vh' }}
            className='animations'
        >
            <img src='https://media.vandal.net/i/1280x720/10-2021/2021105724573_1.jpg.webp' alt='Landing' style={{ width: '70%' }} />
            <Link to={"/pokedex"} style={{ textDecoration: 'none' }}>
                <Button variant="outlined">Enter</Button>
            </Link>
        </Grid>
    )
}
