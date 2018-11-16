import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import SecondComponent from './SecondComponent';

class FirstComponent extends PureComponent {

   




    render() {

        let account = {
            email : this.props.email
            ,password : this.props.password
            ,children :  this.props.children
        }

        return (
            <div>
                <p>email : {this.props.email}</p>
                <p>password : {this.props.password}</p>
                <p>children : {this.props.children}</p>
                <SecondComponent account={account} ></SecondComponent>
            </div>
        );
    }
}

FirstComponent.propTypes = {
    email : PropTypes.string
    ,password : PropTypes.string
};

export default FirstComponent;