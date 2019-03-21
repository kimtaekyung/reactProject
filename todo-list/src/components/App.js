import React, { Component } from 'react';
import PageTemplate from './PageTemplate';
import TodoInput from './TodoInput';
import TotoList from './TodoList';
class App extends Component {
    render() {
        return (
            <PageTemplate>
                <TodoInput/>
                <TotoList/>
            </PageTemplate>
        );
    }
}

export default App;