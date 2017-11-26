//@flow
import React, { Component } from 'react';
import Card from 'material-ui/Card';

import { Container } from 'components/Layout';

class Vote extends Component<*> {
  render() {
    return (
      <div>
        <Container>
          <Card>
            <h2>Vote</h2>
          </Card>
        </Container>
      </div>
    );
  }
}

export default Vote;
