import React, {Component} from 'react';
import {Container} from 'reactstrap';
import Header from "./Header";
import Footer from "./Footer";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div id="body">
                    <Container>
                        {this.props.children}
                    </Container>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default App;

