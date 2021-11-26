import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Card, CardMedia , CardContent , CardActions , Typography, IconButton, Divider } from '@material-ui/core';
import { Favorite } from '@material-ui/icons';
import { addFavorite, removeFavorite } from '../redux/actions/index';

export default function PokeCard({id, name, image, types}) {
    const favorites = useSelector(state => state.favorites)
    const dispatch = useDispatch();
    let status = false;

    function handleFavorite(){
        let status = favorites?.find(pokemon => pokemon.id === id);
        if(!status){
            dispatch(addFavorite({id, name, image, types}));
        } else {
            dispatch(removeFavorite(id));
        }
    }

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
            {favorites?.forEach(pokemon => {
                if(pokemon.id === id) status = true 
            })}
            <CardActions>
                <IconButton size="small" onClick={handleFavorite}>
                    {status ? 
                        <Favorite color='error'/>
                        : <Favorite/>
                    }
                </IconButton>
            </CardActions>
        </Card >
    )
}

