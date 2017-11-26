import React, { Component } from 'react';

import Header from 'components/Header';
import { Container } from 'components/Layout';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container>Fooood App</Container>
      </div>
    );
  }
}

export default App;
