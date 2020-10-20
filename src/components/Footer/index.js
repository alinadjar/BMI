import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { facebook } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faInstagram, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons'
// import { faPhone, faBarcode, faEnvelope } from '@fortawesome/free-solid-svg-icons'
// import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import './footer.css'


class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div style={{ marginTop:'10px'}}>
                <div style={{ width: '85%', margin: '0 auto', border: '2px solid #DDD', borderRadius: '30px', paddingBottom:'5px' }}>
                    {/* Footer Content */}
                    <footer style={{ marginTop: '2rem' }}>
                        <div className='row' style={{ direction: 'rtl', margin: 0 }}>
                            <div className='col-12 col-lg-3' style={{}}>
                                {/* <ul style={{ listStyle: 'none', textAlign: 'right', fontSize: '1rem' }}>
                                <li>تماس با ما</li>
                                <li>
                                    <span> <FontAwesomeIcon icon={faMapMarkerAlt} size="sm" /> </span>
                                    <span style={{ paddingRight: '1rem' }}>آدرس: مشهد، بهارستان 18</span>
                                </li>
                                <li>
                                    <span> <FontAwesomeIcon icon={faPhone} size="sm" /> </span>
                                    <span style={{ paddingRight: '1rem' }}>تلفن: 37501-051</span>
                                </li>
                                <li>
                                    <span> <FontAwesomeIcon icon={faEnvelope} size="sm" /> </span>
                                    <span style={{ paddingRight: '1rem' }}>ایمیل: info@tabarok.ir</span>
                                </li>
                                <li>
                                    <span> <FontAwesomeIcon icon={faBarcode} size="sm" /> </span>
                                    <span style={{ paddingRight: '1rem' }}>کدپستی: 91677</span>
                                </li>
                            </ul> */}
                                <h4 style={{ color: '#999', textAlign: 'right' }}>My Domain.com</h4>
                                <ul className='ulFooterSocial' style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', direction: 'ltr', height: '100%' }}>
                                    <li><a href='https://www.google.com/' target='_blank'><FontAwesomeIcon icon={faFacebook} size="lg" color='#b7b7b7' /></a></li>
                                    <li><a href='https://www.google.com/' target='_blank'><FontAwesomeIcon icon={faTwitter} size="lg" color='#b7b7b7' /></a></li>
                                    <li><a href='https://www.google.com/' target='_blank'><FontAwesomeIcon icon={faInstagram} size="lg" color='#b7b7b7' /></a></li>
                                    <li><a href='https://www.google.com/' target='_blank'><FontAwesomeIcon icon={faLinkedin} size="lg" color='#b7b7b7' /></a></li>
                                    <li><a href='https://www.google.com/' target='_blank'><FontAwesomeIcon icon={faTelegram} size="lg" color='#b7b7b7' /></a></li>
                                </ul>
                            </div>
                            <div className='col-12 col-lg-6' style={{}}>
                                <div className='row'>
                                    <div className='col-6'>
                                        <ul style={{ listStyle: 'none', textAlign: 'center', width: '100%', borderRight: '3px solid #DDD' }}>
                                            <li>درباره ما</li>
                                            <li>تماس با ما</li>
                                            <li>شرایط و قوانین</li>
                                        </ul>
                                    </div>
                                    <div className='col-6'>
                                        <ul style={{ listStyle: 'none', textAlign: 'center', width: '100%', borderRight: '3px solid #DDD' }}>
                                            <li>درباره ما</li>
                                            <li>تماس با ما</li>
                                            <li>شرایط و قوانین</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-lg-3' style={{}}>
                                <div className='row'>
                                    <div className='col-4'>
                                        <img className='img-fluid' src={require('../../images/footer/union.png')} alt='some txt' />
                                    </div>
                                    <div className='col-4'>
                                        <img className='img-fluid' src={require('../../images/footer/enamad.png')} alt='some txt' />
                                    </div>
                                    <div className='col-4'>
                                        <img className='img-fluid' src={require('../../images/footer/rasaneh.png')} alt='some txt' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                    {/* <div style={{ borderTop: '2px solid #bbb', width: '80%', margin: '0 auto' }}></div> */}

                </div>
                <p style={{ textAlign: 'center', fontSize: '.8rem', marginTop: '.5rem' }}>&copy;Copyright 2020 - Tabarok Industrial Group Co.</p>
            </div>
        );
    }
}

export default Footer;