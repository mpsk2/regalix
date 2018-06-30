import React, {Component} from 'react';
import {Container} from 'reactstrap';

class App extends Component {
    render() {
        return (
            <Container>
                {this.props.children}
            </Container>
        );
    }
}

export default App;

