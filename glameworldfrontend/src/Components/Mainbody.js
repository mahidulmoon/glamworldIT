import React, { Component } from 'react';

class Mainbody extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default Mainbody;