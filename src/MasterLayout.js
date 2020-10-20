import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import MenuSidePanel from './components/SidePanels/Menu'




class MasterLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    toggleSidePanel = () => {
        // this.setState(prev => ({
        //   showSidePanel: !prev.showSidePanel
        // }));
    
        const sidePanel = document.getElementById('sidePanel');
        sidePanel.classList.toggle('isOpen');
    
        document.getElementById('backSidePanel').classList.toggle('isOpen');
    }

    render() {
        return (
            <React.Fragment>
                <div className="alert alert-warning alert-dismissible fade show" role="alert" style={{ margin:0, textAlign: 'center'}}>
                    بر اساس بخش‌نامه جدید بیمه مرکزی، صدور بیمه شخص ثالث و پرداخت خسارت آن، بدون نسخه کاغذی بیمه‌نامه و با نسخه الکترونیک آن انجام می‌شود.
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <Header toggleMenuSidePanel={this.toggleSidePanel}/>
                { this.props.children}
                <Footer />

                <MenuSidePanel  toggleMenuSidePanel={this.toggleSidePanel}/>
            </React.Fragment>
        );
    }
}



export default MasterLayout;