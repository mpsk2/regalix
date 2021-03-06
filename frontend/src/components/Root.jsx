import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import configureStore from '../store/configureStore';
import About from './About';
import Contact from './Contact';
import App from './App';
import TasksList from '../containers/TasksList';

const store = configureStore();

const Root = () => (
    <App>
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path="/" component={TasksList}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
          </div>
        </Router>
      </Provider>
    </App>
);

export default Root;
