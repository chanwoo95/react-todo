import React, { Component } from 'react';

class NowTime extends Component {
    getDate = () => {
        const date = new Date();
        const year = date.getFullYear();
        const hours = date.getHours();
        const month = date.getMonth();

        return;
    };
    render() {
        return <h2>{this.getDate}</h2>;
    }
}

export default NowTime;
