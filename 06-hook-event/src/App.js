import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import './assets/css/style.css';
import MyState from './components/MyState';
import MyEffect from './components/MyEffect';
import StateEffectEx from './components/StateEffectEx';
import MyReducer1 from './components/MyReducer1';
import DateRange1 from './components/DateRange1';
import DateRange2 from './components/DateRange2';
import MyRef from './components/MyRef';
import MyCallBack from './components/MyCallback';
import MyMemo from './components/MyMemo';

const App = () => {
    return (
        <div>
            <h1>06-hook-event</h1>

            <NavLink className='normalLink' activeClassName='activeLink' to='/mystate'>
                MyState
            </NavLink>
            <NavLink className='normalLink' activeClassName='activeLink' to='/myeffect'>
                MyEffect
            </NavLink>
            <NavLink className='normalLink' activeClassName='activeLink' to='/state_effect_ex'>
                StateEffectEx
            </NavLink>
            <NavLink className='normalLink' activeClassName='activeLink' to='/myreducer1'>
                MyReducer1
            </NavLink>
            <NavLink className='normalLink' activeClassName='activeLink' to='/dateRange1'>
                dateRange1
            </NavLink>
            <NavLink className='normalLink' activeClassName='activeLink' to='/dateRange2'>
                dateRange2
            </NavLink>
            <NavLink className='normalLink' activeClassName='activeLink' to='/myRef'>
                myRef
            </NavLink>
            <NavLink className='normalLink' activeClassName='activeLink' to='/myCallBack'>
                myCallBack
            </NavLink>
            <NavLink className='normalLink' activeClassName='activeLink' to='/myMemo'>
                myMemo
            </NavLink>
            <Switch>
                <Route path='/mystate' component={MyState} />
                <Route path='/myeffect' component={MyEffect} />
                <Route path='/state_effect_ex' component={StateEffectEx} />
                <Route path='/myreducer1' component={MyReducer1} />
                <Route path='/dateRange1' component={DateRange1} />
                <Route path='/dateRange2' component={DateRange2} />
                <Route path='/myRef' component={MyRef} />
                <Route path='/myCallBack' component={MyCallBack} />
                <Route path='/myMemo' component={MyMemo} />
            </Switch>
        </div>
    );
};

export default App;
