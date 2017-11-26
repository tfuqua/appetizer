//@flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Card from 'material-ui/Card';

import { getVoters } from './actions';
import { Container } from 'components/Layout';
import Loader from 'components/Loader';

class Vote extends Component<*> {
  componentDidMount() {
    this.props.getVoters();
  }
  render() {
    return (
      <div>
        <Container>
          <Card>
            <Container>
              {this.props.voters ? (
                <div>
                  {this.props.voters.map((voter, i) => (
                    <div>
                      <h3>{voter.name}</h3>
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
    voters: store.vote.voters
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getVoters }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Vote);
