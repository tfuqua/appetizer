//@flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Card from 'material-ui/Card';

import { getLeaderboard } from './actions';
import { Container } from 'components/Layout';
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
            <Container>
              <h2>Leaderboard</h2>

              {this.props.scores ? (
                <div>
                  {this.props.scores.map((score, i) => (
                    <div>
                      <h3>{score.title}</h3>
                    </div>
                  ))}
                </div>
              ) : (
                <Loader />
              )}
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
