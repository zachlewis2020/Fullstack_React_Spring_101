import React from 'react';
import {RouteComponentProps} from "react-router-dom";
import Activities from "./Activities";
import AskMe from "./AskMe";
import BannerMsg from "./BannerMsg";
import HeaderMsg from "./HeaderMsg";
import Grid from '@material-ui/core/Grid';

class Home extends React.Component<RouteComponentProps> {

    render() {

        return (
            <div>
                <Grid container>
                    <Grid item xs={12}>
                        <HeaderMsg/>
                        <BannerMsg/>
                    </Grid>
                </Grid>
                <Activities/>
                <AskMe/>
            </div>
        );
    }
}

export default Home;
