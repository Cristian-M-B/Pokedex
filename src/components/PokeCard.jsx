import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Divider } from '@material-ui/core';
import { Favorite, Share } from '@material-ui/icons';
import { WhatsappShareButton, FacebookShareButton, WhatsappIcon, FacebookIcon } from 'react-share';
import { addFavorite, removeFavorite } from '../redux/actions/index';

export default function PokeCard({id, name, image, types}) {
    const [shareOpen, setShareOpen] = useState(false);
    const favorites = useSelector(state => state.favorites)
    const dispatch = useDispatch();
    let status = false;

    function handleFavorite(){
        let status = favorites?.find(pokemon => pokemon.id === id);
        if(!status){
            dispatch(addFavorite({id, name, image, types}));
        } else {
            dispatch(removeFavorite(id));
        }
    }

    function handleShare(){
        setShareOpen(!shareOpen);
    }

    return (
        <Card style={{ margin: '3vh' }}>
            <Link to={`/pokedex/detail/${id}`} style={{ textDecoration: 'none', color:'black' }}>
                <CardMedia
                    component="img"
                    height="300vh"
                    image={image}
                />
                <CardContent>
                    <Typography variant="h5">
                        #{id} {name}
                    </Typography>
                </CardContent>
                <Divider />
            </Link>
            {favorites?.forEach(pokemon => {
                if(pokemon.id === id) status = true 
            })}
            <CardActions style={{display:'flex', justifyContent:'space-between'}}>
                <IconButton size="small" onClick={handleFavorite}>
                    {status ? 
                        <Favorite color='error'/>
                        : <Favorite/>
                    }
                </IconButton>
                {shareOpen && (
                    <>
                        <WhatsappShareButton
                            url={`http://localhost:3000/pokedex/detail/${id}`}
                            title="¡Mira este pokemon!"
                        >
                            <WhatsappIcon round={true} style={{ width: "5vh", height: "5vh" }} />
                        </WhatsappShareButton>
                        <FacebookShareButton
                            url={`https://amadeus.vercel.app/detail/614df55e887587966406cd59`}
                            quote="¡Mira este pokemon!"
                            hashtag="#pokemon"
                        >
                            <FacebookIcon round={true} style={{ width: "5vh", height: "5vh" }} />
                        </FacebookShareButton>
                    </>
                )}
                <IconButton size="small" onClick={handleShare}>
                    <Share/>
                </IconButton>
            </CardActions>
        </Card >
    )
}

