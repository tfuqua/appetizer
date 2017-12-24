//@flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Card from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import Avatar from 'material-ui/Avatar';
import glamorous from 'glamorous';

import { getVoters, receiveVoter } from './actions';
import { Container } from 'components/Layout';
import Loader from 'components/Loader';

class Vote extends Component<*> {
  componentDidMount() {
    this.props.getVoters();
  }

  navigate = (voter: Object) => {
    this.props.receiveVoter(voter);
    this.props.history.push(`/vote/${voter.id}`);
  };

  render() {
    return (
      <div>
        <Container>
          <div>
            {this.props.voters ? (
              this.props.voters.length > 0 ? (
                <Grid container>
                  {this.props.voters.map((voter, i) => (
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                      <VoterCard onClick={() => this.navigate(voter)}>
                        <Avatar className="avatar">{voter.name.charAt(0)}</Avatar>
                        <H3>{voter.name}</H3>
                      </VoterCard>
                    </Grid>
                  ))}
                </Grid>
              ) : (
                <Container>
                  <h2>Everyone has voted!</h2>
                </Container>
              )
            ) : (
              <Loader />
            )}
          </div>
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
  return bindActionCreators({ getVoters, receiveVoter }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Vote);

const VoterCard = glamorous(Card)({
  padding: '16px',
  textAlign: 'center',
  '& .avatar': {
    margin: '8px auto'
  },
  '&:hover': {
    cursor: 'pointer',
    background: '#ECECEC'
  }
});

const H3 = glamorous.h3({
  textTransform: 'uppercase',
  color: '#777',
  fontSize: '20px',
  margin: '20px 0 10px'
});
