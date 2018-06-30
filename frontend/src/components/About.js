import React, {Component} from 'react';
import {Container, Jumbotron} from 'reactstrap';

export default class About extends Component {
    componentDidMount() {
        document.title = "About | Regalix";
    }
    render() {
        return (
            <div>
                <Jumbotron>
                    <h1>About</h1>
                </Jumbotron>
                <Container>
                    <p>
                        Create Single Page Application with tasks table using
                        Python backend framework with RDBMS and migrations.
                    </p>
                </Container>
            </div>
        );
    }
}