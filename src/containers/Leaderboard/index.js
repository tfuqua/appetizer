//@flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Card from 'material-ui/Card';

import { getLeaderboard } from './actions';
import { Container } from 'components/Layout';

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
            </Container>
          </Card>
        </Container>
      </div>
    );
  }
}

function mapStateToProps(store, props) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getLeaderboard }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Leaderboard);
