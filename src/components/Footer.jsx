import React from 'react';
import { AppBar, Toolbar, Grid, Typography, IconButton } from '@material-ui/core';
import { LinkedIn, BusinessCenter, PictureAsPdf } from '@material-ui/icons';

export default function Footer() {
    return (
        <AppBar position="static">
            <Toolbar style={{height:'8vh'}}>
                <Grid container direction="row" alignItems="center" justifyContent="center">
                    <Typography>Cristian Baronetto</Typography>
                    <a href='https://www.linkedin.com/in/cristian-baronetto' target='_blank' rel='noreferrer'>
                        <IconButton style={{ color: 'white' }}>
                            <LinkedIn />
                        </IconButton>
                    </a>
                    <a href='https://cristianbaronetto.vercel.app' target='_blank' rel='noreferrer'>
                        <IconButton style={{ color: 'white' }}>
                            <BusinessCenter />
                        </IconButton>
                    </a>
                    <a href='https://drive.google.com/file/d/1RxU-PS31Dnl6xrYCbIyAXI9s51hlbREu/view' target='_blank' rel='noreferrer'>
                        <IconButton style={{ color: 'white' }}>
                            <PictureAsPdf />
                        </IconButton>
                    </a>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
