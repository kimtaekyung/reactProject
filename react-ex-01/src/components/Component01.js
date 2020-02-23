import React from 'react';
import qs from 'qs';
import {Route,Link,Switch} from 'react-router-dom';
import Sub01 from './Sub01';
import Sub02 from './Sub02';


const Component01 = ({location}) => {
    const param = qs.parse(location.search,{
        ignoreQueryPrefix: true
    });
    return (
        <div>
            {param.param}
            <div>
                <ul>
                    <li><Link to="/com1/sub1">sub1</Link></li>
                    <li><Link to="/com1/sub2">sub2</Link></li>
                </ul>
                <Switch>
                    <Route path={["/com1","/com1/sub1"]} component={Sub01}></Route>
                    <Route path="/com1/sub2" component={Sub02}></Route>
                </Switch>
            </div>
        </div>
    );
};

export default Component01;