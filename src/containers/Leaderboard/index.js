//@flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Card from 'material-ui/Card';
import openSocket from 'socket.io-client';

import { getLeaderboard } from './actions';
import { Container } from 'components/Layout';
import LeaderboardTable from './LeaderboardTable';
import Loader from 'components/Loader';
import Button from 'material-ui/Button';

const socket = openSocket('http://localhost:8000');

class Leaderboard extends Component<*> {
  componentDidMount() {
    this.props.getLeaderboard();
    socket.emit('my other event', { my: 'data' });
    socket.on('news', function(data) {
      console.log(data);
    });
  }

  handleClick = () => {
    socket.emit('my other event', { my: 'data' });
  };

  render() {
    return (
      <div>
        <Container>
          <Card>
            <Container>
              <Button raised onClick={() => this.handleClick()}>
                Test
              </Button>
              {this.props.scores ? <LeaderboardTable scores={this.props.scores} /> : <Loader />}
            </Container>
          </Card>
        </Container>
      </div>
    );
  }
}

function mapStateToProps(store, props) {
  return {
    scores: store.leaderboard.scores
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getLeaderboard }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Leaderboard);
