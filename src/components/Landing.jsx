import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import '../styles/landing.css';

export default function Landing() {
    return (
        <div className='landing'>
            <Link to={"/pokedex"} style={{ textDecoration: 'none' }}>
                <Button variant="contained" className='button'>
                    Pokedex
                </Button>
            </Link>
        </div>
    )
}
