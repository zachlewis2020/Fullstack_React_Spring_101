import React from 'react';
import {RouteComponentProps} from "react-router-dom";
import {Button} from "@material-ui/core";

class Page2 extends React.Component<RouteComponentProps> {

    render() {

        return (
            <div className="Page2">
                <h1>Page 2</h1>
                <Button
                    variant="contained"
                    color="secondary"
                    style={{color: 'yellow'}}
                    onClick={() => {
                        this.props.history.push('/');
                    }}
                >
                    Home
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    style={{color: 'yellow'}}
                    onClick={() => {
                        this.props.history.push('/page1');
                    }}
                >
                    Page 1
                </Button>
            </div>
        );
    }
}

export default Page2;
