import {combineReducers} from 'redux';

import counterModule from './Counter';

const rootReducer = combineReducers(
    {
        //앞으로 추가될 모듈들이 이 위치에서 리덕스에 추가된다.
        counterModule
    }
);

export default rootReducer;