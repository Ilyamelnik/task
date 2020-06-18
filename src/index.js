import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import Authorizathion from './components/authorizathion/Authorizathion';
import App from './App';
import { BrowserRouter, Route, } from "react-router-dom";
import store from '../src/redux/store';

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <Route exact path="/" component={Authorizathion} />
            <Route exact path="/mainprojects" component={App} />
        </BrowserRouter>
    </Provider>

), document.getElementById('root'))
