import Counter from '../components/Counter';
import * as actions from '../actions';
import { connect } from 'react-redux';

export function getRandomColor(){
    console.log('getRandomColor');
    const color = [
        '#495057',
        '#f03e3e'
    ]

    const random = Math.floor(Math.random() * 2);
    console.log(random);
    return color[random];
}

const mapStateToProps = (state) => ({
    color : state.color,
    number : state.number
});

const mapDispatchToProps = (dispatch) => ({
    onIncrement: () => dispatch(actions.increment()),
    onDecrement: () => dispatch(actions.decrement()),
    onSetColor: () => {
        const color = getRandomColor();
        console.log('color >> ' + color);
        dispatch(actions.setColor(color));
    }
});

const CounterCounter = connect(
    mapStateToProps,mapDispatchToProps
)(Counter);

export default CounterCounter;