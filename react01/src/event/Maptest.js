import React, { Component, Fragment } from 'react';

class Maptest extends Component {
    render() {

        const names = ['1','2'];
        const nameList = names.map(
            (name,index) => (<li key={index}>{name}</li>)
        );

        return (
            <Fragment>
                <ol>
                    {nameList}
                </ol>
            </Fragment>
        );
    }
}

export default Maptest;