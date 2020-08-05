import React, { Component } from 'react';

class Services extends Component {
    render() {
        return (
            <React.Fragment>
                <center><h3>OUR SERVICES</h3></center>
                <div id="feature" className="feature">
                    <div className="ftdesign">
                        <div className="green-square"><img src="./icons8-ios-logo-64.png" /></div>
                        <h5>IOS <br/>Developer</h5>
                        <p>Small details</p>
                    </div>
                    <div className="ftdesign">
                        <div className="green-square"><img src="./icons8-android-os-64.png" /></div>
                        <h5>Android <br/>Developer</h5>
                        <p>Small details</p>
                    </div>
                    <div className="ftdesign">
                        <div className="green-square"><img src="./icons8-web-design-64.png" /></div>
                        <h5>Fullstact<br/>WEB Developer</h5>
                        <p>Small details</p>
                    </div>
                    <div className="ftdesign">
                        <div className="green-square"><img src="./icons8-it-48.png" /></div>
                        <h5>IT Executive</h5>
                        <p>Small details</p>
                    </div>
                    
                </div>
            </React.Fragment>
        );
    }
}

export default Services;