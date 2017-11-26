import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import routes from '../../routes';
import Header from 'components/Header';
import { Container } from 'components/Layout';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          {routes.map(
            (route, i) =>
              route.layout ? React.createElement(route.layout, { key: i, ...route }) : <Route key={i} {...route} />
          )}
        </Switch>
      </div>
    );
  }
}

export default App;
