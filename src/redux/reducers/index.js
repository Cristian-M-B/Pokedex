import { GET_POKEMONS } from "../actions/constants";
import { GET_TYPES } from "../actions/constants";
import { GET_DETAIL, REMOVE_DETAIL } from "../actions/constants";
import { SORT_BY_NAME, SORT_BY_NUMBER, FILTER_BY_TYPE } from "../actions/constants";
import { GET_FAVORITES, ADD_FAVORITE, REMOVE_FAVORITE } from "../actions/constants";
import { SORT_FAVORITE_BY_NAME, SORT_FAVORITE_BY_NUMBER } from "../actions/constants";
import { SEARCH_POKEMON } from "../actions/constants";

var initialState = {
    pokemons: [],
    allPokemons: [],
    types: [],
    detail: {},
    favorites:[],
    darkMode: false
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case GET_POKEMONS:
            return {
            ...state,
            pokemons: action.payload,
            allPokemons: action.payload
        }

        case GET_TYPES:
            let types = action.payload.sort((a,b) => {
                if(a > b) return 1;
                if(a < b) return -1;
                return 0;
            })
            return {
            ...state,
            types: types
        }

        case GET_DETAIL:
            return {
            ...state,
            detail: action.payload
        }

        case REMOVE_DETAIL:
            return {
            ...state,
            detail: {}
        }

        case SORT_BY_NAME:
            let pokemonsName = action.payload === 'A-Z' ? 
            state.pokemons.sort((a,b) => {
                if(a.name > b.name) return 1;
                if(a.name < b.name) return -1;
                return 0;
            })
            : state.pokemons.sort((a,b) => {
                if(a.name > b.name) return -1;
                if(a.name < b.name) return 1;
                return 0;
            })
            return {
            ...state,
            pokemons: pokemonsName
        }

        case SORT_BY_NUMBER:
            let pokemonsNumber = action.payload === '1-150' ? 
            state.pokemons.sort((a,b) => {
                return a.id - b.id;
            })
            : state.pokemons.sort((a,b) => {
                return b.id - a.id;
            })
            return {
                ...state,
                pokemons: pokemonsNumber
            }

        case FILTER_BY_TYPE:
            let pokemonsFiltered = [];
            if (action.payload === 'all') {
                pokemonsFiltered = state.allPokemons
            } else {
                state.allPokemons.forEach(pokemon => {
                    pokemon.types.forEach(type => {
                        if (type.toLowerCase() === action.payload) {
                            pokemonsFiltered.push(pokemon)
                        }
                    })
                })
            }
            return {
                ...state,
                pokemons: pokemonsFiltered
            }

        case GET_FAVORITES:
            let response = JSON.parse(localStorage.getItem('favorites'));
            let res = response? response : state.favorites;
            return {
                ...state,
                favorites: res
            }

        case ADD_FAVORITE:
            localStorage.setItem('favorites', JSON.stringify([...state.favorites, action.payload]));
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }

        case REMOVE_FAVORITE:
            localStorage.setItem('favorites', JSON.stringify(state.favorites.filter(pokemon => pokemon.id !== action.payload)));
            return {
                ...state,
                favorites: state.favorites.filter(pokemon => pokemon.id !== action.payload)
            }

        case SORT_FAVORITE_BY_NAME:
            let favoritesName = action.payload === 'A-Z' ?
                state.favorites.sort((a, b) => {
                    if (a.name > b.name) return 1;
                    if (a.name < b.name) return -1;
                    return 0;
                })
                : state.favorites.sort((a, b) => {
                    if (a.name > b.name) return -1;
                    if (a.name < b.name) return 1;
                    return 0;
                })
            return {
                ...state,
                favorites: favoritesName
            }

        case SORT_FAVORITE_BY_NUMBER:
            let favoritesNumber = action.payload === '1-150' ?
                state.favorites.sort((a, b) => {
                    return a.id - b.id;
                })
                : state.favorites.sort((a, b) => {
                    return b.id - a.id;
                })
            return {
                ...state,
                favorites: favoritesNumber
            }

        case SEARCH_POKEMON:
            return {
                ...state,
                pokemons: action.payload
            }

        default: return state
    }
}

export default reducer;