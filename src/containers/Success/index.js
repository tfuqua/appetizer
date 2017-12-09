import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'material-ui/Button';
import Card from 'material-ui/Card';
import CheckIcon from 'material-ui-icons/CheckCircle';
import glamorous from 'glamorous';

import { Container } from 'components/Layout';

class Success extends Component {
  render() {
    return (
      <Card>
        <Container>
          <Confirmation>
            <CheckIcon />
            <h3>Your votes have been recorded!</h3>
            <Link to="/">
              <Button raised color="accent">
                Return to Leaderboard
              </Button>
            </Link>
          </Confirmation>
        </Container>
      </Card>
    );
  }
}

export default Success;

const Confirmation = glamorous.div({
  textAlign: 'center',
  '& h3': {
    fontSize: '20px',
    marginBottom: '32px'
  },
  '& svg': {
    color: '#4caf50',
    width: '100px',
    height: '100px',
    margin: '20px 0 8px'
  }
});
