import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button } from '@material-ui/core';

export default function Landing() {
    return (
        <Box style={{position:'relative'}}>
            <img src='https://media.vandal.net/i/1280x720/10-2021/2021105724573_1.jpg.webp' style={{width:'80%'}}/>
            <Link to={"/pokedex"} style={{textDecoration:'none'}}>
                <Button variant="outlined" style={{position:'absolute', top:'10%', left:'44%'}}>Pokedex</Button>
            </Link>
        </Box>
    )
}
