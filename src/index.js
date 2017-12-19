/*eslint no-unused-vars: 0 */
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import preset from 'jss-preset-default';

import { configureStore } from './store';
import registerServiceWorker from './registerServiceWorker';
import addSocketListeners from 'socketListeners';
import App from './containers/App';
import './index.css';
import Theme from './theme';

const jss = create(preset());
jss.options.insertionPoint = 'insertion-point-jss';

const store = configureStore(window.__INITIAL_STATE__);
addSocketListeners(store.dispatch, store.getState);

//IE 11 startsWith Polyfill
if (!String.prototype.startsWith) {
  String.prototype.startsWith = function(searchString, position){
    position = position || 0;
    return this.substr(position, searchString.length) === searchString;
};


ReactDOM.render(
  <Provider store={store}>
    <JssProvider jss={jss}>
      <Router>
        <MuiThemeProvider theme={Theme}>
          <Route path="/" component={App} />
        </MuiThemeProvider>
      </Router>
    </JssProvider>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
