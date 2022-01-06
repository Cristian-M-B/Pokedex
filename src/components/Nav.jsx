import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppBar, Toolbar, Grid, Typography, IconButton, Badge } from '@material-ui/core';
import { Favorite, MusicNote, MusicOff } from '@material-ui/icons';
import SearchBar from './SearchBar';
import opening from '../assets/audios/opening.mp3';

export default function Nav() {
    const [sound, setSound] = useState(false);
    const favorites = useSelector(state => state.favorites);

    return (
        <AppBar position="static">
            <Toolbar style={{ marginBotton: '5vh' }}>
                <Grid container direction="row" justifyContent="space-between" alignItems="center">
                    <Link to={`/pokedex`} style={{ textDecoration: 'none', color: 'white' }}>
                        <Typography>POKEDEX</Typography>
                    </Link>
                    <SearchBar />
                    <Grid justifyContent="flex-end">
                        <IconButton
                            size="large"
                            color="inherit"
                            component={Link}
                            to="/pokedex/favorites"
                        >
                            <Badge badgeContent={favorites.length ? favorites.length : null} color="error">
                                <Favorite />
                            </Badge>
                        </IconButton>
                        {sound &&
                            <audio src={opening} preload="auto" autoplay="true" />
                        }
                        <IconButton style={{ color: 'white' }} onClick={() => setSound(!sound)}>
                            {sound ?
                                <MusicOff />
                                : <MusicNote />
                            }
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

