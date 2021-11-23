import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import PokeCard from './PokeCard';
import { sortByName, sortByNumber } from '../redux/actions/index';

export default function Pokedex() {
    const pokemons = useSelector(state => state.pokemons);
    const dispatch = useDispatch();
    const [render, setRender] = useState('');
    const [select, setSelect] = useState({
        name:'',
        number:'',
        filter:''
    });

    function handleSortName(e){
        dispatch(sortByName(e.target.value));
        setRender(`Sort name ${e.target.value}`);
        setSelect({
            ...select,
            name: e.target.value
        })
    }

    function handleSortNumber(e){
        dispatch(sortByNumber(e.target.value));
        setRender(`Sort number ${e.target.value}`);
        setSelect({
            ...select,
            number: e.target.value
        })
    }

    // function handleFilterType(e){
    //     setRender(`Filter ${e.target.value}`);
    //     setSelect({
    //         ...select,
    //         filter: e.target.value
    //     })
    // }

    return (
        <>
            <Grid
                container
                direction='row'
                justifyContent='center'
                style={{marginTop:'5vh'}}
            >
                <FormControl variant="standard" style={{width:120}}>
                    <InputLabel>Nombre</InputLabel>
                    <Select value={select.name} onChange={(e) => handleSortName(e)}>
                        <MenuItem value='A-Z'>A - Z</MenuItem>
                        <MenuItem value='Z-A'>Z - A</MenuItem>
                    </Select>
                </FormControl>

                <FormControl variant="standard" style={{width:120}}>
                    <InputLabel>Número</InputLabel>
                    <Select value={select.number} onChange={(e) => handleSortNumber(e)}>
                        <MenuItem value='1-150'>1 - 150</MenuItem>
                        <MenuItem value='150-1'>150 - 1</MenuItem>
                    </Select>
                </FormControl>
                {/* <FormControl variant="standard" style={{width:120}}>
                    <InputLabel>Tipo</InputLabel>
                    <Select value={select.filter} onChange={e => handleFilterType(e)}>
                        <MenuItem value='all'>Todos</MenuItem>
                        <MenuItem value=''></MenuItem>
                    </Select>
                </FormControl> */}
            </Grid>
            <Grid
                container
                direction='row'
                justifyContent='center'
            >
                {pokemons?.map(poke => {
                    return <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                        <PokeCard id={poke.id} name={poke.name} type={poke.types} image={poke.image} key={poke.id} />
                    </Grid>
                })}
            </Grid>
        </>
    )
}

