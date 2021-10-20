import React, { useState } from 'react';
import { useSelector } from 'react-redux';
// import  { styled }  from '@material-ui/styles';
import { AppBar, Toolbar, IconButton, Badge, Typography, Grid, Switch } from '@material-ui/core';
import { Favorite } from '@material-ui/icons';

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
                    <Typography>POKEDEX</Typography>
                    <Typography>ABOUT</Typography>
                    <IconButton
                        size="large"
                        color="inherit"
                    >
                        <Badge badgeContent={favorites.length? favorites.length : null} color="error">
                            <Favorite />
                        </Badge>
                    </IconButton>
                    <Switch 
                        checked={checked}
                        onChange={handleChange}
                        color={checked? 'secondary' : 'info'}
                    />
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

