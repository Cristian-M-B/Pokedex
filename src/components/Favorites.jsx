import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, FormControl, InputLabel, Select, MenuItem, Pagination } from '@material-ui/core';
import { sortFavoriteByName, sortFavoriteByNumber } from '../redux/actions/index';
import PokeCard from './PokeCard';

export default function Favorites() {
    const types = useSelector(state => state.types);
    const favorites = useSelector(state => state.favorites);
    const dispatch = useDispatch();
    const [select, setSelect] = useState({
        name:'',
        number:''
    })

    const [page, setPage] = useState(1);
    const [favoritesPerPage, setFavoritesPerPage] = useState(12);
    const indexLastFavorite = page * favoritesPerPage;
    const indexFirstFavorite = indexLastFavorite - favoritesPerPage;
    const currentFavorites = favorites.slice(indexFirstFavorite, indexLastFavorite);

    function handleChange(event, value) {
        setPage(value);
    }

    function handleSortName(e){
        dispatch(sortFavoriteByName(e.target.value));
        setSelect({
            name: e.target.value,
            number:''
        })
        setPage(1);
    }

    function handleSortNumber(e){
        dispatch(sortFavoriteByNumber(e.target.value));
        setSelect({
            number: e.target.value,
            name:''
        })
        setPage(1);
    }

    return (
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
            </Grid>
            <Grid
                container
                direction='row'
                justifyContent='center'
            >
                {currentFavorites?.map(poke => {
                    return <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                        <PokeCard id={poke.id} name={poke.name} type={poke.types} image={poke.image} key={poke.id} />
                    </Grid>
                })}
            </Grid>
            <Grid
                container
                direction='row'
                justifyContent='center'
            >
                <Pagination
                    count={Math.ceil(favorites.length / favoritesPerPage)}
                    page={page}
                    onChange={handleChange}
                    variant="outlined"
                    shape="rounded"
                    color="primary"
                    style={{ marginBottom: "2vw ", marginTop: "1vw" }}
                />
            </Grid>
        </>
    )
}

