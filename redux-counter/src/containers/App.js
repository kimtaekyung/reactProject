import React, { Component } from 'react';
import CounterCounter from './CounterCounter';

//yarn add redux react-redux node-sass sass-loader classnames
class App extends Component {
    render() {
        return (
            <div>
                <CounterCounter/>
            </div>
        );
    }
}

export default App;