import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, FormControl, InputLabel, Select, MenuItem, Typography, Pagination } from '@material-ui/core';
import { sortFavoriteByName, sortFavoriteByNumber } from '../redux/actions/index';
import Nav from './Nav';
import Footer from './Footer';
import PokeCard from './PokeCard';

export default function Favorites() {
    const types = useSelector(state => state.types);
    const favorites = useSelector(state => state.favorites);
    const dispatch = useDispatch();
    const [select, setSelect] = useState({
        name: '',
        number: ''
    })

    const [page, setPage] = useState(1);
    const [favoritesPerPage, setFavoritesPerPage] = useState(12);
    const indexLastFavorite = page * favoritesPerPage;
    const indexFirstFavorite = indexLastFavorite - favoritesPerPage;
    const currentFavorites = favorites.slice(indexFirstFavorite, indexLastFavorite);

    function handleChange(event, value) {
        setPage(value);
    }

    function handleSortName(e) {
        dispatch(sortFavoriteByName(e.target.value));
        setSelect({
            name: e.target.value,
            number: ''
        })
        setPage(1);
    }

    function handleSortNumber(e) {
        dispatch(sortFavoriteByNumber(e.target.value));
        setSelect({
            number: e.target.value,
            name: ''
        })
        setPage(1);
    }

    return (
        <>
            <Nav />
            {favorites?.length ?
                <>
                    <Grid
                        container
                        direction='row'
                        justifyContent='center'
                    >
                        <FormControl variant="standard" style={{ width: 120, margin: '3vh' }}>
                            <InputLabel>Name</InputLabel>
                            <Select value={select.name} onChange={(e) => handleSortName(e)}>
                                <MenuItem value='asc'>A - Z</MenuItem>
                                <MenuItem value='des'>Z - A</MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl variant="standard" style={{ width: 120, margin: '3vh' }}>
                            <InputLabel>Number</InputLabel>
                            <Select value={select.number} onChange={(e) => handleSortNumber(e)}>
                                <MenuItem value='asc'>1 - 251</MenuItem>
                                <MenuItem value='des'>251 - 1</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid
                        container
                        direction='row'
                        justifyContent='center'
                    >
                        {currentFavorites?.map(poke => {
                            return <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={poke.id}>
                                <PokeCard id={poke.id} name={poke.name} type={poke.types} image={poke.image} />
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

                : <div style={{ height: '39.7vh' }}>
                    <Typography variant="h4" style={{ marginTop: '38vh' }}>You don't have favorites</Typography>
                </div>
            }
            <Footer />
        </>
    )
}

