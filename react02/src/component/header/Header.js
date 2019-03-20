import React, { Component } from 'react';
import '../../style/header/header.scss';
import Buttton from '../button/Button';
class Header extends Component {
    render() {
        return (
            <div className='header'>
                <h1 className='label'>헤더</h1>
                <Buttton>버튼</Buttton>
            </div>
        );
    }
}

export default Header;