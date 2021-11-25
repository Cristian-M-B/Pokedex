import React from 'react';
import { useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';
import PokeCard from './PokeCard';

export default function Favorites() {
    const favorites = useSelector(state => state.favorites);
    return (
        <>
            {favorites?.map(poke => {
                return <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <PokeCard id={poke.id} name={poke.name} type={poke.types} image={poke.image} key={poke.id} />
                </Grid>
            })}
        </>
    )
}

