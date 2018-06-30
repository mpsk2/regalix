import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import configureStore from "../store/configureStore";
import App from "./App";
import TaskEdit from "./TaskEdit";
import VisibleTasksList from "../containers/VisibleTasksList";

const store = configureStore();

const Root = () => (
    <App>
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path='/' component={VisibleTasksList}/>
                    <Route path='/:id/edit' component={TaskEdit}/>
                </Switch>
            </Router>
        </Provider>
    </App>
);

export default Root
