import React, {useEffect, useState} from 'react';
import mainSmile from '../images/mainsmile.jpg';
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    mypic: {
        backgroundImage: mainSmile,
        color: 'black',
        font: 'perpetua',
        fontSize: 'large',
        height: '10%',
    },
    circle: {
          width: '100px',
          height: 80,
          borderRadius: '50%',
    },
});

export default function BannerMsg() {
    const classes = useStyles();
    return (
        <div>
            <Container className={classes.mypic}>
                <img src={mainSmile} style={{width: '100%'}}/>
            </Container>
        </div>
    )
};
