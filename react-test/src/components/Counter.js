import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Value from './Value';
import Control from './Control';
import { connect } from 'react-redux';
import * as actions from '../actions';
// import { bindActionCreators } from 'redux';

const propTypes = {

}

const DefaultProps = {

}



class Counter extends PureComponent {

    constructor(props){
        super(props);
        this.setRandomColor = this.setRandomColor.bind(this);
    }

    setRandomColor(){
        const color = [
            Math.floor((Math.random()*55) + 200)
            ,Math.floor((Math.random()*55) + 200)
            ,Math.floor((Math.random()*55) + 200)
        ]
        this.props.handleSetcolor(color);
    }

    render() {

        const color = this.props.color;
        const style = {
            background : `rgb(${color[0]},${color[1]},${color[2]})`
        };

        return (
            <div style={style}>
                <Value number={this.props.number}></Value>
                <Control 
                    onPlus={this.props.handleIncrement}
                    onSubtract={this.props.handleDecrement}
                    onRandomizeColor={this.setRandomColor}
                ></Control>
            </div>
        );
    }
}

Counter.propTypes = propTypes;
Counter.DefaultProps = DefaultProps;

const mapStateToProps = (state) => {
    return {
        number : state.counter.number
        ,color : state.ui.color
    }
}

const mapDispatchToProps = (dispatch ) => {
    return {
        handleIncrement : () => {dispatch(actions.increment())},
        handleDecrement : () => {dispatch(actions.decrement())},
        handleSetcolor: (color) => {dispatch(actions.setColor(color))}
    };
    // return bindActionCreators(actions, dispatch);

}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);