import React, { Component } from 'react';

class NowTime extends Component {
    render() {
        const date = new Date();

        const nowDate = date.toDateString();

        return <h1 className="nowtime">{nowDate}</h1>;
    }
}

export default NowTime;
