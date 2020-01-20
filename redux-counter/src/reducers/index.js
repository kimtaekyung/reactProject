import * as types from '../actions/ActionTypes';


const initalState = {
    color : 'black'
    ,number : 0
}

function counter(state = initalState, action){
    switch(action.types){
        case types.INCREMENT : 
            return {
                ...state,
                number: state.number + 1
            };
        case types.DECREMENT : 
            return {
                ...state,
                number: state.number - 1
            };
        case types.SET_COLOR : 
            return {
                ...state,
                color : action.color
            }
        default : 
            return state;
    }
}

export default counter;