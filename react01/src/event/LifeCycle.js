import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Ref from './Ref';

class LifeCycle extends Component {
    constructor(props) {
        super(props);
        console.log('constructor');
    }

    state = {
        number : 0, color : null
    }

    //부모 컴포넌트로 부터 받은 prop 값을 현제의 state 값에 설정 한다.
    static getDerivedStateFromProps(nextProps, prevState){
        console.log('getDerivedStateFromProps - 부모 컴포넌트로 부터 전달받은 프롭스값을 자신의 state 에 할당할때 씀');
        if(nextProps.color !== prevState.color){
            return {color : nextProps.color}
        }
        return null;
    }

    componentDidMount() {
        console.log('componentDidMount - 렌더링 후 호출함 네트워크 비동기 호출영역');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate' , nextProps , nextState , ' - props 또는 state 했을때 리렌더링 할지 결정 bool');
        return nextState.number % 10 !== 4;
    }

    handleClick = () => {
        this.setState({
            number : this.state.number + 1
        });
    }

    //삭제 예정 componentWillMount componentWillReceiveProps componentWillUpdate
    // componentWillMount() {
    //     console.log('componentWillMount');
    // }
    // componentWillReceiveProps(nextProps) {
    // }
    // componentWillUpdate(nextProps, nextState) {
    // }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate', prevProps, prevState);
        if(snapshot){
            console.log('업데이트 되기전의 색상 : ' , snapshot);
        }
    }


    componentWillUnmount() {

    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('getSnapshotBeforeUpdate - 렌더링 바로 직전에 호출');
        if(prevProps.color !== prevState.color){
            return this.myRef.style.color;
        }

        return null;
    }


    render() {
        console.log('render');

        const style = {
            color : this.props.color
        }

        return (
            <div>
                <h1 style={style} ref={ ref => this.myRef=Ref}>
                    {this.state.number}
                </h1>
                <p>color : {this.state.color}</p>
                <button
                    onClick={this.handleClick}
                >더하기</button>
            </div>
        );
    }
}

LifeCycle.propTypes = {

};

export default LifeCycle;