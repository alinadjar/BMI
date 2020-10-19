import React, { Component } from 'react'
import { Link } from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div >
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <button className="btn btn-primary" onClick={this.toggleSidePanel}>SS</button>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>




                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown
        </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link to="/about" className="dropdown-item">About</Link>
                                    <Link to="/contact" className="dropdown-item">Contact</Link>
                                    <Link to="/spin" className="dropdown-item">Spin Wheel</Link>
                                    <div className="dropdown-divider"></div>
                                    <Link to="/tjs" className="dropdown-item">Tjs</Link>
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link disabled">Home</Link>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </div>
        );
    }
}



export default Header;