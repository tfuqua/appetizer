//@flow
import React, { Component } from 'react';
import Tabs, { Tab } from 'material-ui/Tabs';
import Card from 'material-ui/Card';

import { Container } from 'components/Layout';
import Dishes from './Dishes';
import Voters from './Voters';

type Props = {};
type State = {
  value: number
};
class Admin extends Component<Props, State> {
  state = {
    value: 1
  };

  handleChange = (event: Event, value: number) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;

    return (
      <div>
        <Container>
          <Card>
            <Tabs value={value} onChange={this.handleChange}>
              <Tab label="Dishes" />
              <Tab label="Voters" />
            </Tabs>

            {value === 0 && (
              <Container>
                <Dishes />
              </Container>
            )}
            {value === 1 && (
              <Container>
                <Voters />
              </Container>
            )}
          </Card>
        </Container>
      </div>
    );
  }
}

export default Admin;
