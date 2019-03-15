import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LoginBox extends Component {
    constructor(props){
        super(props);
        this.state = {
            id : ''
            ,pw : ''
            ,alert : 'false'
        }

        this.handleOnIdInput = this.handleOnIdInput.bind(this);
        this.handleOnOPwInput = this.handleOnOPwInput.bind(this);
        this.loginClick = this.loginClick.bind(this);
    }

    handleOnIdInput(e){
        this.setState({
            id : e.target.value
        });
    }

    handleOnOPwInput(e){
        this.setState({
            pw : e.target.value
        });
    }

    loginClick(){
        console.log("loginClick");
        console.log(this.state.id);
        console.log(this.state.pw);
        this.setState({
            id : ''
            ,pw : ''
        })
    }
    render() {
        return (
            <div>
                id : <input onChange={this.handleOnIdInput} value={this.state.id}></input>
                pw : <input onChange={this.handleOnOPwInput} value={this.state.pw}></input>
                <button onClick={this.loginClick}>로그인</button>
            </div>
            
        );
    }
}

export default LoginBox;