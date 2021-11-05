import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail, removeDetail } from '../redux/actions/index';
import { Grid, CardMedia, Typography } from '@material-ui/core';

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
        <Grid 
            container
            direction= 'row'
            justifyContent= 'center'
            style={{marginTop:'20vh'}}
        >
            <Grid>
                <CardMedia
                    component="img"
                    height="300vh"
                    image={pokemon?.image}
                />
            </Grid>
            <Grid style={{marginLeft:'15vh'}}>
                <Typography align='left' variant='h4' style={{marginBottom:'4vh'}}>{pokemon?.name}</Typography>
                {pokemon?.types?.map(p => {
                    return <Typography key={p} align='left'>{p}</Typography>
                })}
                <Typography align='left' style={{marginTop:'4vh'}}>HP: {pokemon?.hp}</Typography>
                <Typography align='left'>ATTACK: {pokemon?.attack}</Typography>
                <Typography align='left'>DEFENCE: {pokemon?.defense}</Typography>
                <Typography align='left'>SPEED: {pokemon?.speed}</Typography>
                <Typography align='left'>HEIGHT: {pokemon?.height}</Typography>
                <Typography align='left'>WEIGHT: {pokemon?.weight}</Typography>
            </Grid>
        </Grid>
    )
}

