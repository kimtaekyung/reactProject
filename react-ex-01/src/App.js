import React from 'react';
import {Link,Route,Switch} from 'react-router-dom';
import Component01 from './components/Component01';
import Component02 from './components/Component02';

function App() {

  const style = {
    listStyle : "none"
  }
  return (
    <div className="App">
      <div>
        <ul>
          <li style={style}><Link to="/com1">com1</Link></li>
          <li style={style}><Link to="/com2">com2</Link></li>
        </ul>

      </div>
      <Switch>
        <Route path="/com1" component={Component01}></Route>
        <Route path="/com2" component={Component02}></Route>
      </Switch>
    </div>
  );
}

export default App;


