import React, { Component } from 'react'
import './MenuSidePanel.css';

class MenuPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }




    render() {
        return (
            <div id="backSidePanel" className="backSidePanel" onClick={this.props.toggleMenuSidePanel}
                style={{ backgroundColor: '#00000055', position: 'fixed', left: 0, top: 0, height: '100%' }}>
                <div className="sidePanel" id="sidePanel" style={{ width: '250px', height: '100%' }}>
                    <div className="" style={{ padding: '3%', height: '100%' }}>
                        <div style={{ height: '25%', backgroundColor: 'red' }}>

                        </div>
                        <div style={{ height: '60%', backgroundColor: '#FF0' }}>

                        </div>
                        <div style={{ height: '15%', position: 'relative' }}>
                            <p style={{ position: 'absolute', bottom: 0, width: '100%', margin: '0 auto', fontSize: '.7em', textAlign: 'center' }}>version v1.0</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MenuPanel;