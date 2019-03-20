import React, { Component } from 'react';

class IterrationSample extends Component {

    state = {
        inputValue : '',
        names : [{value : '눈사람', changeInput : false , changeValue : ''},{value : '눈', changeInput : false , changeValue : ''},{value : '얼름', changeInput : false , changeValue : ''},{value : '렛잇고', changeInput : false , changeValue : ''}],
        chanegeValue : ''
    };

    handleChangeInputValue = (e) => {
        this.setState({
            inputValue : e.target.value
        })
    }

    handleInsertName = () =>{
        this.setState({
            names : this.state.names.concat({value : this.state.inputValue, changeInput : false , changeValue : ''}),
            inputValue : ''
        });
    }

    openChangeValueInput = (index) => {

        const {names} = this.state.names;
        console.log(index);
    }


    deleteItem = (index) => {

        const {names} = this.state;

        // this.setState({
        //     names : [
        //         ...names.slice(0,index),
        //         ...names.slice(index + 1, names.length)
        //     ]
        // });
        this.setState(
            {
                names : names.filter((item,i) => (
                    i !== index
                ))
            }
        )

    }

    handleUpdateInputValue = (e) => {
        this.setState(
            {
                changeValue : e.target.value
            }
        )
    }

    render() {

        const nameList = this.state.names.map(
            (obj,index) => (
                <li key={index}>
                    <span onDoubleClick={ () => this.deleteItem(index)}>{obj.value}</span>
                    <button onClick={ () => this.openChangeValueInput(index)}>변경</button>
                    {obj.changeInput && <input type='text' onChange={this.handleUpdateInputValue}></input>} 
                </li>)
        );
        return (
            <div>
                <ul>
                    {nameList}
                </ul>
                <input onChange={this.handleChangeInputValue} value={this.state.inputValue}></input>
                <button onClick={this.handleInsertName}>등록</button>
            </div>
        );
    }
}

export default IterrationSample;