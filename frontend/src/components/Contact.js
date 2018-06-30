import React, {Component} from 'react';
import {Container, Jumbotron} from 'reactstrap';

export default class Contact extends Component {
    componentDidMount() {
        document.title = "Contact | Regalix";
    }

    render() {
        return (
            <div>
                <Jumbotron>
                    <h1>Contact</h1>
                </Jumbotron>
                <Container>
                    <p>Michał Piotr Stankiewicz</p>
                    <p>stinger.dat@gmail.com</p>
                </Container>
            </div>
        );
    }
}