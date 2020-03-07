
import React from 'react';

import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';

import './App.scss';

// remember, for this app, our header will be inside our main container so remove
// <Header /> below and insert <Header /> in our homepage.component.jsx file
class App extends React.Component {
  
    render() {

        return (
             
            <Switch>
                <Route path="/"  exact={ true } component={ HomePage } />
            </Switch>        

        );

    }
}

export default App;
