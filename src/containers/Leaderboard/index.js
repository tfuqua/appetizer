//@flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Card from 'material-ui/Card';

import { fetchScores } from '../../socketListeners';
import { Container } from 'components/Layout';
import LeaderboardTable from './LeaderboardTable';
import Loader from 'components/Loader';
import Button from 'material-ui/Button';

class Leaderboard extends Component<*> {
  componentDidMount() {
    this.props.fetchScores();
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
  return bindActionCreators({ fetchScores }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Leaderboard);
