import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail, removeDetail } from '../redux/actions/index';
import { Grid, CardMedia, Typography, CircularProgress } from '@material-ui/core';
import Nav from './Nav';
import images from '../assets/images.js';
import './animations.css';

export default function PokeDetail() {
    const {id} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDetail(id));
        return () => {
            dispatch(removeDetail())
        }
    },[])

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
                    style={{ marginTop: '20vh' }}
                    className='animations'
                >
                    <Grid justifyContent='center'>
                        <CardMedia
                            component="img"
                            height="300vh"
                            image={pokemon?.image}
                        />
                    </Grid>
                    <Grid justifyContent='center' style={{ marginLeft: '15vh' }}>
                        <Typography align='left' variant='h4' style={{ marginBottom: '4vh' }}> #{pokemon?.id} {pokemon?.name}</Typography>
                        <Grid container direction='row' justifyContent='center'>
                            {pokemon?.types?.map(type => {
                                return <img key={type} src={images[type]} height='90vh' />
                            })}
                        </Grid>
                        <Typography align='left' style={{ marginTop: '4vh' }}>HP: {pokemon?.hp}</Typography>
                        <Typography align='left'>ATTACK: {pokemon?.attack}</Typography>
                        <Typography align='left'>DEFENCE: {pokemon?.defense}</Typography>
                        <Typography align='left'>SPEED: {pokemon?.speed}</Typography>
                        <Typography align='left'>HEIGHT: {pokemon?.height}</Typography>
                        <Typography align='left'>WEIGHT: {pokemon?.weight}</Typography>
                    </Grid>
                </Grid>
                : <CircularProgress
                    size={60}
                    style={{ marginTop: '40vh' }}
                />
            }
        </>
    )
}

