import React, { Component } from 'react';
import '../css/validationSample.css';

export default class validationSample extends Component {

    state = {
        password : ''
        ,clicked : false
        ,validated : false
    }

    handleChange = (e) => {
        this.setState({
            password : e.target.value
        });
    }

    handleButtonClick = () => {
        this.setState({
            clicked : true
            ,validated : this.state.password === '000'
        });
        this.test.focus();
    }


    //ref(돔 엘리먼트) 테스트 아래와같이 ref 속성값을 주면 현재의 클래스에서 this.test 로 직접 dom 에 접근이 가능하다
    render() {
        return (
            <div>
                <input
                    ref={(ref)=>{this.test=ref}}
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}
                >
                </input>
            </div>
        );
    }
}
