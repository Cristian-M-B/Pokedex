import axios from 'axios';
import { GET_POKEMONS } from './constants.js';
import { GET_TYPES } from './constants.js';
import { GET_DETAIL } from './constants.js';
import { REMOVE_DETAIL } from './constants.js';

export function getPokemons() {
    return async function (dispatch) {
        try {
                let pokemonsApi = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=150`);
                let pokemons = await Promise.all(pokemonsApi.data.results.map(async pokemon => await axios (pokemon.url))) 
                pokemons = pokemons.map(pokemon => {
                    return {
                        id: pokemon.data.id,
                        name: pokemon.data.name.toUpperCase(),
                        image: pokemon.data.sprites.other.dream_world.front_default,
                        height: pokemon.data.height,
                        weight: pokemon.data.weight,
                        hp: pokemon.data.stats[0].base_stat,
                        attack: pokemon.data.stats[1].base_stat,
                        defense: pokemon.data.stats[2].base_stat,
                        speed: pokemon.data.stats[5].base_stat,
                        types: pokemon.data.types.map(t => {
                            return t.type.name.toUpperCase()
                        })
                    }
                })    
            return dispatch({
                type: GET_POKEMONS,
                payload: pokemons
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export function getTypes() {
    return async function (dispatch) {
        try {
            let types = await axios.get(``)
            return dispatch({
                type: GET_TYPES,
                payload: types.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export function getDetail(id) {
    return async function (dispatch) {
        try {
            let detail = await axios.get(`/${id}`)
            return dispatch({
                type: GET_DETAIL,
                payload: detail.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export function removeDetail() {
    return{
        type: REMOVE_DETAIL
    }
}