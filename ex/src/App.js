import React, { Component } from 'react';
import Header from './components/header/Header';
import Container from './components/container/Container';

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Container></Container>
      </div>
    );
  }
}

export default App;
