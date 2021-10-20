import { GET_POKEMONS } from "../actions/constants";
import { GET_TYPES } from "../actions/constants";
import { GET_DETAIL } from "../actions/constants";
import { REMOVE_DETAIL } from "../actions/constants";

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

        default: return state
    }
}

export default reducer;