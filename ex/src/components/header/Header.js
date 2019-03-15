import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Navi from './Navi';
import LoginBox from './LoginBox';

class Header extends PureComponent {


    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <Navi></Navi>
                <LoginBox></LoginBox>
            </div>
        );
    }
}
export default Header;