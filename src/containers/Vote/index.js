//@flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Card from 'material-ui/Card';
import Button from 'material-ui/Button';

import { vote } from '../../socketListeners';
import { getVoters } from './actions';
import { Container } from 'components/Layout';
import Loader from 'components/Loader';

class Vote extends Component<*> {
  componentDidMount() {
    this.props.getVoters();
  }

  vote = () => {
    this.props.vote();
  };

  render() {
    return (
      <div>
        <Container>
          <Card>
            <Container>
              <Button raised onClick={this.vote}>
                Vote
              </Button>
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
  return bindActionCreators({ getVoters, vote }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Vote);
