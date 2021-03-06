import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import '../styles/landing.css';
import '../styles/animations.css';

export default function Landing() {
    return (
        <div className='landing'>
            <Link to={"/pokedex"} style={{ textDecoration: 'none' }}>
                <Button variant="contained" className='button animations-inverse'>
                    Pokedex
                </Button>
            </Link>
        </div>
    )
}
