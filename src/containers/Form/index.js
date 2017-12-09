//@flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { LinearProgress } from 'material-ui/Progress';
import Card from 'material-ui/Card';
import { emitVote } from '../../socketListeners';
import glamorous from 'glamorous';

import { displayMessage, TOAST_RIGHT } from 'containers/Message/actions';
import DishForm from './DishForm';
import { vote, getDishes, getVoterByID } from '../Vote/actions';
import Loader from 'components/Loader';

type Props = {
  getDishes: Function,
  getVoterByID: Function,
  displayMessage: Function,
  emitVote: Function,
  vote: Function,
  voter: Object,
  match: Object,
  history: Object
};

type State = {
  dishes: Array<Object>,
  activeStep: number,
  votes: Array<Object>
};

class VoteForm extends Component<Props, State> {
  state = {
    dishes: [],
    activeStep: 0,
    votes: []
  };

  componentDidMount() {
    this.props.getVoterByID(this.props.match.params.id);
    this.props.getDishes().then(dishes => {
      this.setState({ dishes });
    });
  }

  addVote = (vote: Object) => {
    let votes = this.state.votes;
    votes.push(vote);

    if (this.state.dishes.length > this.state.activeStep + 1) {
      this.setState({ votes, activeStep: this.state.activeStep + 1 });
    } else {
      this.props.vote(votes).then(response => {
        if (response) {
          this.props.history.push('/success');
          this.props.displayMessage(response.message, TOAST_RIGHT);
          this.props.emitVote();
        }
      });
    }
  };

  handleNext = () => {
    if (this.state.dishes.length > this.state.activeStep + 1) {
      this.setState({ activeStep: this.state.activeStep + 1 });
    } else {
      this.props.vote(this.state.votes).then(response => {
        if (response) {
          this.props.history.push('/success');
          this.props.displayMessage(response.message, TOAST_RIGHT);
          this.props.emitVote();
        }
      });
    }
  };

  handleBack = () => {
    this.setState({
      activeStep: this.state.activeStep - 1
    });
  };

  render() {
    return (
      <Card>
        <VoteWrapper>
          {this.props.voter && this.state.dishes.length > 0 ? (
            <div>
              <DishForm
                addVote={this.addVote}
                skipVote={this.handleNext}
                dish={this.state.dishes[this.state.activeStep]}
              />

              <br />
              <br />
              <Progress
                color="primary"
                mode="determinate"
                value={this.state.activeStep / this.state.dishes.length * 100}
              />
              <TextCenter>
                {this.state.activeStep + 1} of {this.state.dishes.length} dishes
              </TextCenter>
            </div>
          ) : (
            <Loader />
          )}
        </VoteWrapper>
      </Card>
    );
  }
}

function mapStateToProps(store, props) {
  return {
    voter: store.vote.voter
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ vote, emitVote, getDishes, getVoterByID, displayMessage }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(VoteForm);

const VoteWrapper = glamorous.div({
  padding: '16px'
});

const Progress = glamorous(LinearProgress)({
  height: '10px'
});

const TextCenter = glamorous.div({
  textAlign: 'center',
  fontSize: '20px',
  fontWeight: 'bold',
  padding: '16px'
});
