import React, { Component } from 'react';
import Countries from './containers/Countries';
import { Route, Switch, Redirect } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/countries" component={Countries} />
                    <Redirect from="/" to="/countries" />
                </Switch>
            </div>
        );
    }
}

export default App;
