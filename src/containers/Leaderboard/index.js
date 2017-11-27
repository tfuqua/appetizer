//@flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Card from 'material-ui/Card';

import { getLeaderboard } from './actions';
import { Container } from 'components/Layout';
import LeaderboardTable from './LeaderboardTable';
import Loader from 'components/Loader';

class Leaderboard extends Component<*> {
  componentDidMount() {
    this.props.getLeaderboard();
  }

  render() {
    return (
      <div>
        <Container>
          <Card>
            <Container>{this.props.scores ? <LeaderboardTable scores={this.props.scores} /> : <Loader />}</Container>
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
