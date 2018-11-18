import React, { Component } from 'react';
import PropTypes from 'prop-types';

const proptypes = {
    number : PropTypes.number
}

const defaultProps = {
    number : -1
}

class Value extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.number}</h1>
            </div>
        );
    }
}

Value.propTypes = proptypes;
Value.defaultProps = defaultProps;

export default Value;