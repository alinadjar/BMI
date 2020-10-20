import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import { LOGO } from '../../images/LOGO/LOGOw.png'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>



                <div className='d-none d-lg-block'>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">



                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto" style={{ direction: 'rtl', margin: '0 auto' }}>
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
                        </div>
                        <img className='img-fluid' src={require('../../images/LOGO/LOGOw.png')} alt='some txt' />
                    </nav>
                </div>

                <div className='d-lg-none' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '50px', backgroundColor:'#343a40' }}>


                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <Link to="/contact" style={{ padding: '0 5px', textDecoration: 'none' }}>ورود/ ثبت نام</Link>
                        <Link to="/contact" style={{ padding: '0 5px', textDecoration: 'none' }}>تمدید</Link>
                    </div>

                    <div style={{ position: 'absolute', left: '48%' }}>
                        <img src={require('../../images/LOGO/LOGOw.png')} alt='some txt' style={{ width: '50px', height: '50px' }} />
                    </div>

                    <div>
                        <button className="btn" onClick={this.props.toggleMenuSidePanel} style={{backgroundColor:'#343a40', border:'1px solid #DDD', marginRight: '10px'}}>
                            <span> <FontAwesomeIcon icon={faBars} size="lg" color='#DDD'/> </span>
                        </button>
                    </div>

                </div>






                {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
                </nav> */}
            </div>
        );
    }
}



export default Header;