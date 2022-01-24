import React from 'react';
import { AppBar, Toolbar, Grid, Typography, IconButton } from '@material-ui/core';
import { LinkedIn, BusinessCenter, PictureAsPdf } from '@material-ui/icons';
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
    icon: {
        color: "white",
        "&:hover": {
            borderBottom: "2px solid white"
        }
    }
}));

export default function Footer() {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar style={{height:'8vh'}}>
                <Grid container direction="row" alignItems="center" justifyContent="center">
                    <Typography variant="h6">Cristian Baronetto</Typography>
                    <a href='https://www.linkedin.com/in/cristian-baronetto' target='_blank' rel='noreferrer'>
                        <IconButton>
                            <LinkedIn className={classes.icon} />
                        </IconButton>
                    </a>
                    <a href='https://cristianbaronetto.vercel.app' target='_blank' rel='noreferrer'>
                        <IconButton>
                            <BusinessCenter className={classes.icon} />
                        </IconButton>
                    </a>
                    <a href='https://drive.google.com/file/d/1RxU-PS31Dnl6xrYCbIyAXI9s51hlbREu/view' target='_blank' rel='noreferrer'>
                        <IconButton>
                            <PictureAsPdf className={classes.icon} />
                        </IconButton>
                    </a>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
