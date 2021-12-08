import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, FormControl, InputLabel, Select, MenuItem, Pagination, CircularProgress } from '@material-ui/core';
import Nav from './Nav';
import PokeCard from './PokeCard';
import { sortByName, sortByNumber, filterByType } from '../redux/actions/index';
// import images from '../assets/images.js';

export default function Pokedex() {
    const pokemons = useSelector(state => state.pokemons);
    const types = useSelector(state => state.types);
    const dispatch = useDispatch();
    const [select, setSelect] = useState({
        name:'',
        number:'',
        filter:''
    });

    const [page, setPage] = useState(1);
    const [pokemonsPerPage, setPokemonsPerPage] = useState(12);
    const indexLastPokemons = page * pokemonsPerPage;
    const indexFirstPokemons = indexLastPokemons - pokemonsPerPage;
    const currentPokemons = pokemons.slice(indexFirstPokemons, indexLastPokemons);

    
    function handleChange(event, value) {
        setPage(value);
    }

    function handleSortName(e){
        dispatch(sortByName(e.target.value));
        setSelect({
            ...select,
            name: e.target.value,
            number:''
        })
        setPage(1);
    }

    function handleSortNumber(e){
        dispatch(sortByNumber(e.target.value));
        setSelect({
            ...select,
            number: e.target.value,
            name:''
        })
        setPage(1);
    }

    function handleFilterType(e){
        dispatch(filterByType(e.target.value));
        setSelect({
            filter: e.target.value,
            name:'',
            number:''
        })
        setPage(1);
    }

    return (
        <>
            <Nav />
            {pokemons.length ?
                <>
                    <Grid
                        container
                        direction='row'
                        justifyContent='center'
                    >
                        <FormControl variant="standard" style={{ width: 120, margin: '3vh' }}>
                            <InputLabel>Nombre</InputLabel>
                            <Select value={select.name} onChange={(e) => handleSortName(e)}>
                                <MenuItem value='A-Z'>A - Z</MenuItem>
                                <MenuItem value='Z-A'>Z - A</MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl variant="standard" style={{ width: 120, margin: '3vh' }}>
                            <InputLabel>Número</InputLabel>
                            <Select value={select.number} onChange={(e) => handleSortNumber(e)}>
                                <MenuItem value='1-150'>1 - 150</MenuItem>
                                <MenuItem value='150-1'>150 - 1</MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl variant="standard" style={{ width: 120, margin: '3vh' }}>
                            <InputLabel>Tipo</InputLabel>
                            <Select value={select.filter} onChange={(e) => handleFilterType(e)}>
                                <MenuItem value='all'>all</MenuItem>
                                {types?.map(type => <MenuItem key={type} value={type}>{type}</MenuItem>)}
                            </Select>
                        </FormControl>

                        {/* <FormControl variant="standard" style={{ width: 120, margin: '3vh' }}>
                            <InputLabel>Tipo</InputLabel>
                            <Select value={select.filter} onChange={(e) => handleFilterType(e)}>
                                <MenuItem value='all'>all</MenuItem>
                                {types?.map(type => <MenuItem key={type} value={type}>
                                    <CardMedia
                                        component="img"
                                        height='70vh'
                                        image={images[type]}
                                    />
                                </MenuItem>)}
                            </Select>
                        </FormControl> */}
                    </Grid>

                    <Grid
                        container
                        direction='row'
                        justifyContent='center'
                    >
                        {currentPokemons?.map(poke => {
                            return <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                                <PokeCard id={poke.id} name={poke.name} types={poke.types} image={poke.image} key={poke.id} />
                            </Grid>
                        })}
                    </Grid>

                    <Grid
                        container
                        direction='row'
                        justifyContent='center'
                    >
                        <Pagination
                            count={Math.ceil(pokemons.length / pokemonsPerPage)}
                            page={page}
                            onChange={handleChange}
                            variant="outlined"
                            shape="rounded"
                            color="primary"
                            style={{ marginBottom: "2vw ", marginTop: "1vw" }}
                        />
                    </Grid>
                </>

                : <CircularProgress
                    size={60}
                    style={{ marginTop: '40vh' }}
                />
            }
        </>
    )
}

