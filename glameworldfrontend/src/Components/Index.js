import React, { Component } from 'react'
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import Mainbody from './Mainbody';
import Home from './Home'
export default class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <Mainbody>
                    <Router>
                        <Switch>
                            <Route path='/' component={Home} />
                        </Switch>
                    </Router>
                </Mainbody>
            </React.Fragment>
        )
    }
}
