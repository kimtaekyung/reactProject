import React, { Component, Fragment } from 'react';

export default class EventPracitce extends Component {


    state = {
        message : ''
    }

    renderInputMessage = (e) =>{
        this.setState({
            message : e.target.value
        })
    }

    initInputMessage = (e) =>{
        alert(this.state.message);
        this.setState({
            message : ''
        })
    }
    // componentWillMount() {

    // }

    // componentDidMount() {

    // }

    // componentWillReceiveProps(nextProps) {

    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //     return true;
    // }

    // componentWillUpdate(nextProps, nextState) {

    // }

    // componentDidUpdate(prevProps, prevState) {

    // }

    // componentWillUnmount() {

    // }

    render() {
        return (
            <Fragment>
                <h1>이벤트 연습</h1>
                <input 
                    type='text' 
                    name='message' 
                    placeholder='아무거나 입력해보세요' 
                    onChange={this.renderInputMessage}
                    value={this.state.message}
                ></input>
                <button onClick={
                    this.initInputMessage
                }>확인</button>
            </Fragment>            
                
        );
    }
}



