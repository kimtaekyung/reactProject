import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class SecondComponent extends PureComponent {
    render() {  
        return (
            <div>
                <h1>{this.props.account.email}</h1>
                <h1>{this.props.account.password}</h1>
                <h1>{this.props.account.children}</h1>
            </div>
        );
    }
}

SecondComponent.propTypes = {
    account : PropTypes.object
};

export default SecondComponent; 