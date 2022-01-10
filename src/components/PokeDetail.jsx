import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail, removeDetail } from '../redux/actions/index';
import { Grid, CardMedia, Typography, CircularProgress } from '@material-ui/core';
import Nav from './Nav';
import Footer from './Footer';
import images from '../assets/images.js';
import './animations.css';

export default function PokeDetail() {
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDetail(id));
        return () => {
            dispatch(removeDetail())
        }
    }, [])

    const pokemon = useSelector(state => state.detail);

    return (
        <>
            <Nav />
            {pokemon.name ?
                <Grid
                    container
                    direction='row'
                    justifyContent='center'
                    alignItems='center'
                    style={{ minHeight: '84vh' }}
                    className='animations'
                >
                    <Grid justifyContent='center' style={{ margin: '2vh' }}>
                        <CardMedia
                            component="img"
                            height="300vh"
                            image={pokemon?.image}
                        />
                    </Grid>
                    <Grid justifyContent='center' style={{ margin: '2vh' }}>
                        <Typography align='left' variant='h4' style={{ marginBottom: '4vh' }}> #{pokemon?.id} {pokemon?.name}</Typography>
                        <Grid container direction='row' justifyContent='center'>
                            {pokemon?.types?.map(type => {
                                return <img key={type} src={images[type]} height='90vh' />
                            })}
                        </Grid>
                        <Grid container direction='row' justifyContent='space-between' style={{ marginTop: '4vh' }}>
                            <Typography>HP: {pokemon?.hp}</Typography>
                            <Typography>SPEED: {pokemon?.speed}</Typography>
                        </Grid>
                        <Grid container direction='row' justifyContent='space-between'>
                            <Typography style={{ marginRight: '2vh' }}>ATTACK: {pokemon?.attack}</Typography>
                            <Typography>DEFENCE: {pokemon?.defense}</Typography>
                        </Grid>
                        <Grid container direction='row' justifyContent='space-between'>
                            <Typography>HEIGHT: {pokemon?.height}</Typography>
                            <Typography>WEIGHT: {pokemon?.weight}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
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

