//@flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Container } from 'components/Layout';

type Props = {};
type State = {};
class Dishes extends Component<Props, State> {
  render() {
    return <Container>dishes edit</Container>;
  }
}

function mapStateToProps(store, props) {
  return {
    voters: store.vote.voters
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Dishes);
