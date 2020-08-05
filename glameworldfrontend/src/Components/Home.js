import React, { Component } from 'react';
import Navgationbar from './Navbar';
import Footerfile from './Footerfile';
import Carouselset from './Carousel';
import Services from './Services';
import Team from './Team';
import Contact from './Contact';
class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Navgationbar />
                <Carouselset />
                <br/>
                <Services />
                <br/>
                <Team />
                <br/>
                <br/>
                <br/>
                <Contact />
                <Footerfile />
            </React.Fragment>
        );
    }
}

export default Home;