import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuList : null
        }
    }

    componentWillMount() {
        let list = [1,2,3,4,5];
        this.setState = {
            menuList : list
        };
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    renderList(){
        let html;
        if(this.props.menuList != null){
            <div>

            </div>
        }
    }
    render() {
        return (
            <div>
                {menuList !=null && this.props.renderList}
            </div>
        );
    }
}

Menu.propTypes = {
    menuList : PropTypes.func
};

export default Menu;