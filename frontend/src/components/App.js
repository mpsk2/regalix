import React, {Component} from 'react';
import VisibleTasksList from '../containers/VisibleTasksList'
import {Container} from 'reactstrap';

const App = () => {
    return (
        <Container>
            <VisibleTasksList />
        </Container>
    );
};

export default App

