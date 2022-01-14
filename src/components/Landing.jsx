import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Button } from '@material-ui/core';
import '../styles/animations.css';

export default function Landing({ image }) {
    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            style={{ height: '100vh' }}
            className='animations'
        >
            <img src={image} alt='Landing' style={{ width: '70%' }} />
            <Link to={"/pokedex"} style={{ textDecoration: 'none' }}>
                <Button variant="outlined">Enter</Button>
            </Link>
        </Grid>
    )
}
