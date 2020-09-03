import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import mainSmile from '../images/mainsmile.jpg';

const useStyles = makeStyles({
    head: {
        background: '#FBD0BE',
        color: 'black',
        height: 90,
        width: '95%',
        fontSize: 'large',
    },
});

export default function HeaderMsg() {
    const classes = useStyles();
    return (<Container className={classes.head}>
                <h2>Positively Tonya</h2>
                <h2>A Southern Lifestyle brand.</h2>
            </Container>
    )
};
