import {combineReducers} from 'redux';

import newModule from './News';

const rootReducer = combineReducers(
    {
        newModule
    }
);

export default rootReducer;