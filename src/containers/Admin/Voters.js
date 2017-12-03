//@flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getVoters } from './actions';
import { Container } from 'components/Layout';
import Loader from 'components/Loader';
import VoterTable from './VoterTable';

type Props = {
  getVoters: Function,
  voters: Array<Object>
};

class Voters extends Component<Props> {
  componentDidMount() {
    this.props.getVoters();
  }

  render() {
    return <Container>{this.props.voters ? <VoterTable voters={this.props.voters} /> : <Loader />}</Container>;
  }
}

function mapStateToProps(store, props) {
  return {
    voters: store.admin.voters
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getVoters }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Voters);
