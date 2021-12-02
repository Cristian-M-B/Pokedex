import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppBar, Toolbar, IconButton, Badge, Typography, Grid, Switch } from '@material-ui/core';
import { Favorite } from '@material-ui/icons';
import SearchBar from './SearchBar';

export default function Nav() {
    const [checked, setChecked] = useState(false);
    const favorites = useSelector(state => state.favorites);

    const handleChange = (e) => {
        setChecked(e.target.checked);
    };

    return (
        <AppBar position="static">
            <Toolbar style={{marginBotton:'5vh'}}>
                <Grid container direction="row" justifyContent="space-between" alignItems="center">
                    {/* <Grid container direction="row" justifyContent="flex-start" alignItems="center"> */}
                    <Link to={`/pokedex`} style={{ textDecoration: 'none', color: 'white' }}>
                        <Typography>POKEDEX</Typography>
                    </Link>
                    <Typography>ABOUT</Typography>
                    {/* </Grid> */}
                    {/* <Grid container direction="row" justifyContent="center" alignItems="center"> */}
                        <SearchBar />
                    {/* </Grid> */}
                    {/* <Grid container direction="row" justifyContent="flex-end" alignItems="center"> */}
                    <IconButton
                        size="large"
                        color="inherit"
                        component={Link}
                        to="/pokedex/favorites"
                    >
                        <Badge badgeContent={favorites.length? favorites.length : null} color="error">
                            <Favorite />
                        </Badge>
                    </IconButton>
                    <Switch 
                        checked={checked}
                        onChange={handleChange}
                        style={{color: checked? 'black':'white'}}
                    />
                    {/* </Grid> */}
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

