import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { TextField, Button } from '@material-ui/core';
import { searchPokemon } from '../redux/actions/index.js';

export default function SearchBar() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    function handleInput(e){
        setInput(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(searchPokemon(input.toLowerCase()));
        setInput('');
        history.push('/pokedex');
    }

    return (
        <form onSubmit={e => handleSubmit(e)}>

            <TextField
                variant="outlined"
                // color="primary"
                placeholder="Buscar pokemon"
                value={input}
                onChange={e => handleInput(e)}
                style={{backgroundColor: 'white', borderRadius:'1vh'}}
            />
            {/* <Button
                variant="outlined"
                color="warning"
                onClick={handleSubmit}
            >
                Buscar
            </Button> */}
    
        </form>
    )
}
