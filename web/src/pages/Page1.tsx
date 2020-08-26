import React, {useEffect, useState} from 'react';
import {RouteComponentProps} from "react-router-dom";
import {Button} from "@material-ui/core";
import {getData} from "../apiUtils/webRequest"
import FormHook from "./FormHook";
const {Wit, log} = require('node-wit');

const client = new Wit({
    accessToken: 'CCRYRDP6SW7CWRVE5VGUBPH34MIOBYNV',
    logger: new log.Logger(log.DEBUG) // optional
});

function Page1(props: RouteComponentProps) {

    const [count, setCount] = useState(0);

    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;
        getData();
        client.message('What is happening tomorrow ?').then((data: any) => {
            console.log('Yay, got Wit.ai response: ' + JSON.stringify(data));
        })
            .catch(console.error);
    });


    return (
        <div className="Page1">
            <h1>Page 1</h1>
            <Button
                variant="contained"
                style={{color: 'green'}}
                onClick={() => {
                    props.history.push('/page2');
                }}
            >
                Page 1
            </Button>
            <Button
                variant="contained"
                style={{color: 'black'}}
                onClick={() => {
                    props.history.push('/');
                }}
            >
                Home
            </Button>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            <FormHook/>
        </div>
    );
}

export default Page1;
