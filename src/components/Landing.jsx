import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Button } from '@material-ui/core';
import './animations.css';

export default function Landing() {
    return (
        <Grid 
            container 
            justifyContent="center"
            alignItems="center" 
            className='animations'
        >
            <Grid item justifyContent="center">
                <img src='https://media.vandal.net/i/1280x720/10-2021/2021105724573_1.jpg.webp' style={{ width: '70%' }} />
            </Grid>
            <Grid item justifyContent="center">
                <Link to={"/pokedex"} style={{ textDecoration: 'none' }}>
                    <Button variant="outlined">Enter</Button>
                </Link>
            </Grid>
        </Grid>
    )
}
