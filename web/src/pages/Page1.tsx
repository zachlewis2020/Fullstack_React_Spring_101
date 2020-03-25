import React from 'react';
import {RouteComponentProps} from "react-router-dom";
import {Button} from "@material-ui/core";

class Page1 extends React.Component<RouteComponentProps> {

    render() {

        return (
            <div className="Page1">
                <h1>Page 1</h1>
                    <Button
                        variant="contained"
                        style={{color: 'green'}}
                        onClick={() => {
                            this.props.history.push('/page2');
                        }}
                    >
                        Page 1
                    </Button>
                <Button
                    variant="contained"
                    style={{color: 'black'}}
                    onClick={() => {
                        this.props.history.push('/');
                    }}
                >
                    Home
                </Button>
            </div>
        );
    }
}

export default Page1;
