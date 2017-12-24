//@flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Card from 'material-ui/Card';
import glamorous from 'glamorous';

import { fetchScores } from '../../socketListeners';
import { Container } from 'components/Layout';
import LeaderboardTable from './LeaderboardTable';
import Loader from 'components/Loader';

class Leaderboard extends Component<*> {
  componentDidMount() {
    this.props.fetchScores();
  }

  render() {
    return (
      <div>
        <Container>
          {this.props.scores ? (
            <TableWrapper>
              <h1>Top 5 Dishes</h1>
              <LeaderboardTable scores={this.props.scores} />
            </TableWrapper>
          ) : (
            <Loader />
          )}
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

const TableWrapper = glamorous.div({
  overflowX: 'auto',
  webkitOverflowScrolling: 'touch'
});
