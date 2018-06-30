import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import configureStore from "../store/configureStore";
import App from "./App";

const store = configureStore();

const Root = () => (
    <Provider store={store}>
        <Router>
            <Route exact path='/' component={App}/>
        </Router>
    </Provider>
);

export default Root
