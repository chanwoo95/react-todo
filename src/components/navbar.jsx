import React, { Component } from 'react';
import NowTime from './nowTime';

class Navbar extends Component {
    render() {
        return (
            <>
                <h2 className="navbar-title">Things to do</h2>
                <NowTime />
            </>
        );
    }
}

export default Navbar;
