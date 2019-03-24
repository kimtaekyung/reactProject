import React, { Component } from 'react';
import PageTemplate from './PageTemplate';
import TodoInput from './TodoInput';
import TotoList from './TodoList';

const initalTodos = new Array(500).fill(0).map(
    (foo,index) => ({id : index, content : `일정${index}` ,done: false})
);

class App extends Component {

    state = {
        input : '',
        todos : initalTodos
    }

    id = 1;
    getId = () => {
        return ++this.id;
    }

    handleChange = (e) => {
        const {value} = e.target;
        this.setState({
            input : value
        });
    };

    handleInsert = () => {
        const {input,todos} = this.state;

        const newTodo = {
            id : this.getId()
            ,content : input
            ,done : false
        };

        this.setState({
            todos : [...todos,newTodo]
            ,input:''
        });
    }

    handleToggle = (id) => {    
        const {todos} = this.state;

        const index = todos.findIndex(todo => todo.id === id);

        const toggled = {
            ...todos[index]
            ,done: !todos[index].done
        }

        this.setState({
            todos : [
                ...todos.slice(0,index)
                ,toggled
                ,...todos.slice(index + 1,todos.length)
            ]
        });


    }

    handleRemove = (id) =>{
        const { todos } = this.state;
        const index = todos.findIndex( todo => todo.id === id);
        this.setState({
            todos : [
                ...todos.slice(0,index)
                ,...todos.slice(index + 1, todos.length)
            ]
        });
    }
    render() {
        const {
            handleChange
            ,handleInsert
            ,handleToggle
            ,handleRemove
        } = this;

        const {input, todos} = this.state;

        return (
            <PageTemplate>
                <TodoInput onChange={handleChange} value={input} onInsert={handleInsert}/>
                <TotoList todos = {todos} onToggle={handleToggle} onRemove={handleRemove}/>
            </PageTemplate>
        );
    }
}

export default App;