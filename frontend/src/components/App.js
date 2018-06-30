import React, {Component} from 'react';
import {Container} from 'reactstrap';
import Header from "./Header";
import Footer from "./Footer";

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Container>
                    {this.props.children}
                </Container>
                <Footer/>
            </div>
        );
    }
}

export default App;

