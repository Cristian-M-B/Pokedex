import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardMedia , CardContent , CardActions , Typography, IconButton, Divider } from '@material-ui/core';
import { Favorite } from '@material-ui/icons';

export default function PokeCard({id, name, image, types}) {
    return (
        <Card style={{ margin: '3vh' }}>
            <Link to={`/pokedex/detail/${id}`} style={{ textDecoration: 'none' }}>
                <CardMedia
                    component="img"
                    height="300vh"
                    image={image}
                />
                <CardContent>
                    <Typography variant="h5">
                        {name}
                    </Typography>
                </CardContent>
                <Divider />
            </Link>
            <CardActions>
                <IconButton size="small">
                    <Favorite />
                </IconButton>
            </CardActions>
        </Card >
    )
}

