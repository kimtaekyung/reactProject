import React from 'react';

function setCounterValue(state,action){
    console.log(action);
    switch (action) {
        case 'HELLO':
            return state + 1;
            break;
        case 'WORLD':
            return state -1 ;
            break;
        default:
            return state;
            break;
    }
}


const MyReducer1 = () => {

    //const [counter,setCounter] = React.useState[0];
    //useReducer 첫번째 인자로 내가 정의한 state 와 action 값을 받는 function을 넣어준다.
    const [myCouter, setMyCounter] = React.useReducer(setCounterValue,0);

    return (
        <div>
            <h2>MyReducer1</h2>
            <h1>{myCouter}</h1>
            {/* onClick 이벤트에는 리듀서로 정의한 setter function을 호출 하고 인자는 action 값을 넣어준다. */}
            <button onClick={ e => setMyCounter('HELLO')}>+</button>
            <button onClick={ e => setMyCounter('WORLD')}>-</button>
        </div>
    );
};

export default MyReducer1;