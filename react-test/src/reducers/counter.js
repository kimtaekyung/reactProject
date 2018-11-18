import * as types from '../actions/ActionTypes';

const initalState = {
    number : 0
}

export default function counter(state = initalState, action){
    switch(action.type){

        case types.INCREMENT : 
            return {...state, number : state.number + 1}

        case types.DECREMENT : 
            return {...state, number : state.number - 1}
        default : 
            return state;
    }
}