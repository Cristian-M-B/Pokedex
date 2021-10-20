import React from 'react';
import { useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';
import PokeCard from './PokeCard';

export default function Pokedex() {
    // const pokemons = [
    //     {
    //         image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png"
    //     },
    //     {
    //         image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png"
    //     },
    //     {
    //         image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png"
    //     },
    //     {
    //         image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/65.png"
    //     },
    //     {
    //         image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png"
    //     },
    //     {
    //         image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png"
    //     },
    //     {
    //         image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png"
    //     }
    // ]
    const pokemons = useSelector(state => state.pokemons);

    return (
        <Grid
            container
            direction = 'row'
            justifyContent = 'center'
        >
            {pokemons?.map(poke => {
                return <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <PokeCard id={poke.id} name={poke.name} type={poke.types} image={poke.image} key={poke.id}/>
                </Grid>
            })}
        </Grid>
    )
}

