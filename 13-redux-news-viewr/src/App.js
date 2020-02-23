import React, { Component } from 'react';
import { Route, Link, Switch } from "react-router-dom";
import NewsPage from './pages/NewsPage';
class App extends Component {
  render() {
    return (
      <div>
        <h1>13-Redux-news-viewr</h1>
        <Switch>
          <Route path="/:cetegory" Component={NewsPage}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;