import { GET_POKEMONS } from "../actions/constants";
import { GET_TYPES } from "../actions/constants";
import { GET_DETAIL } from "../actions/constants";
import { REMOVE_DETAIL } from "../actions/constants";
import { SORT_BY_NAME, SORT_BY_NUMBER } from "../actions/constants";

var initialState = {
    pokemons: [],
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
        }

        case GET_TYPES:
            return {
            ...state,
            types: action.payload
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
            let pokemonsName = action.payload === 'A-Z' ? state.pokemons.sort((a,b) => {
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

        default: return state
    }
}

export default reducer;