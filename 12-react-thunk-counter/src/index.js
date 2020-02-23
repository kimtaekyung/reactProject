import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';

//리덕스에서 스토어 생성 함수와 미들웨어 처리 함수 가져오기
import {createStore,applyMiddleware } from 'redux';

//전체 app 을 리덕스에 구독시키기위해 Provider 라는 객체를 가져온다.
import {Provider} from 'react-redux';

//크롬 개발자 도구 
import {composeWithDevTools} from 'redux-devtools-extension';

import {createLogger} from 'redux-logger';

import Reduxthunk from 'redux-thunk';

import rootReducer from './modules';

const logger = createLogger();

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(logger,Reduxthunk)));

//git remotr add 저장소url
//git pull origin master
//git add -A 
//git commit -m "....."
//git push origin master

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
