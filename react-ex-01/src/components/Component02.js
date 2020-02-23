import React from 'react';
import {Route,Switch,Link} from 'react-router-dom';
import Sub03 from './Sub03';
import Sub04 from './Sub04';


const Component02 = ({match}) => {
    const param = match.params;
    return (
        <div>
             {param.param}

             <div>
                <ul>
                    <li><Link to="/com2/sub3">sub03</Link></li>
                    <li><Link to="/com2/sub4">sub04</Link></li>
                </ul>
             </div>

             <Switch>
                <Route path="/com2/sub3" component={Sub03}></Route>
                <Route path="/com2/sub4" component={Sub04}></Route>
             </Switch>
        </div>
    );
};

export default Component02;
