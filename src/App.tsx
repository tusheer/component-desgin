import 'assets/css/global.css';
import AllComponents from 'pages/AllComponents';
import Signin from 'pages/Signin';
import Test1 from 'pages/Test1';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Test1} />
                <Route exact path='/signin' component={Signin} />
                <Route exact path='/component-list' component={AllComponents} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
