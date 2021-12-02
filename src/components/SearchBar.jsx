import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextField, Button } from '@material-ui/core';
import { searchPokemon } from '../redux/actions/index.js';

export default function SearchBar() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    function handleInput(e){
        setInput(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(searchPokemon(input));
        setInput('');
    }

    return (
        <form onSubmit={e => handleSubmit(e)}>

            <TextField
                variant="outlined"
                // color="warning"
                placeholder="Buscar por nombre o número"
                value={input}
                onChange={e => handleInput(e)}
                // style={{color: 'white'}}
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
