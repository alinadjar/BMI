import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import 'popper.js'

import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import MasterLayout from './MasterLayout'

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <MasterLayout>
                <Switch>
                    <Route path="/" exact={true} component={App} />
                    {/* <Route path='/categories/:catID?' exact={true} component={CategoryPage} />
                    <Route path='/categories/:catID?/subcat/:subcatID?' exact={true} component={CategoryPage} />
                    <Route path='/checkout' exact={true} component={Checkout} /> */}
                    <Redirect to="/" />
                </Switch>
            </MasterLayout>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();