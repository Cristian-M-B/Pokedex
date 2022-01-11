import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, FormControl, InputLabel, Select, MenuItem, Pagination, CircularProgress } from '@material-ui/core';
import Nav from './Nav';
import Footer from './Footer';
import PokeCard from './PokeCard';
import { sortByName, sortByNumber, filterByType } from '../redux/actions/index';

export default function Pokedex() {
    const pokemons = useSelector(state => state.pokemons);
    const types = useSelector(state => state.types);
    const dispatch = useDispatch();
    const [select, setSelect] = useState({
        name: '',
        number: '',
        filter: ''
    });

    const [page, setPage] = useState(1);
    const pokemonsPerPage = 12;
    const indexLastPokemons = page * pokemonsPerPage;
    const indexFirstPokemons = indexLastPokemons - pokemonsPerPage;
    const currentPokemons = pokemons.slice(indexFirstPokemons, indexLastPokemons);

    function handleChange(event, value) {
        setPage(value);
    }

    function handleSortName(e) {
        dispatch(sortByName(e.target.value));
        setSelect({
            ...select,
            name: e.target.value,
            number: ''
        })
        setPage(1);
    }

    function handleSortNumber(e) {
        dispatch(sortByNumber(e.target.value));
        setSelect({
            ...select,
            number: e.target.value,
            name: ''
        })
        setPage(1);
    }

    function handleFilterType(e) {
        dispatch(filterByType(e.target.value));
        setSelect({
            filter: e.target.value,
            name: '',
            number: ''
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
                        style={{ marginTop: '3vh', marginBottom: '3vh' }}
                    >
                        <FormControl variant="standard" style={{ width: 90, marginRight: '2vh' }}>
                            <InputLabel>Name</InputLabel>
                            <Select value={select.name} onChange={(e) => handleSortName(e)}>
                                <MenuItem value='asc'>A - Z</MenuItem>
                                <MenuItem value='des'>Z - A</MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl variant="standard" style={{ width: 90, marginRight: '2vh' }}>
                            <InputLabel>Number</InputLabel>
                            <Select value={select.number} onChange={(e) => handleSortNumber(e)}>
                                <MenuItem value='asc'>1 - 251</MenuItem>
                                <MenuItem value='des'>251 - 1</MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl variant="standard" style={{ width: 90, marginRight: '2vh' }}>
                            <InputLabel>Type</InputLabel>
                            <Select value={select.filter} onChange={(e) => handleFilterType(e)}>
                                <MenuItem value='all'>All</MenuItem>
                                {types?.map(type => <MenuItem key={type} value={type}>{type.substring(0, 1).toUpperCase() + type.substring(1)}</MenuItem>)}
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid
                        container
                        direction='row'
                        justifyContent='center'
                    >
                        {currentPokemons?.map(poke => {
                            return <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={poke.id}>
                                <PokeCard id={poke.id} name={poke.name} types={poke.types} image={poke.image} />
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
                            style={{ marginBottom: "2vh", marginTop: "1vh" }}
                        />
                    </Grid>
                </>

                : <div style={{ height: '84vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <CircularProgress
                        size={60}
                    />
                </div>
            }
            <Footer />
        </>
    )
}

