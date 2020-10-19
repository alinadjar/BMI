import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'


class MasterLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                { this.props.children }
                <Footer />
            </React.Fragment>
        );
    }
}



export default MasterLayout;