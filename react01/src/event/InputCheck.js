import React, { Component } from 'react';

export default class InputCheck extends Component {


    state = {
        password : ''
        ,isChecked : false
    }

    passwordInputChange = (e) => {
        this.setState({
            password : e.target.value
        });
      
    }

    passwordCheck = () => {
        if(this.state.password === '0000'){
            this.setState({
                isChecked : true
            });
        }else{
            this.setState({
                isChecked : false
            });
        }
    }

    render() {
        return (
            <div>
                <h1>비밀번호 체크</h1>
                <input 
                    type='password'
                    onChange={this.passwordInputChange}
                    value={this.state.password}
                ></input>
                <button onClick={this.passwordCheck}>검사</button>
                {this.state.isChecked && <h1>체크됨</h1>}
            </div>
        );
    }
}
