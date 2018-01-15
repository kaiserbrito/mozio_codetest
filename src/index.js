import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './stores';
import App from './containers/App';
import { Router, Route, hashHistory  } from 'react-router'

const store = configureStore();

ReactDOM.render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={App}/>
      <Route path='/:place1' component={App}/>
    </Router>
  </Provider>
),document.getElementById('root'))