//@flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Card from 'material-ui/Card';
import MobileStepper from 'material-ui/MobileStepper';
import Button from 'material-ui/Button';
import KeyboardArrowLeft from 'material-ui-icons/KeyboardArrowLeft';
import KeyboardArrowRight from 'material-ui-icons/KeyboardArrowRight';
import glamorous from 'glamorous';

import { Container } from 'components/Layout';
import { getDishes, getVoterByID } from '../Vote/actions';
import Loader from 'components/Loader';

type Props = {
  getDishes: Function,
  getVoterByID: Function,
  voter: Object,
  match: Object
};

type State = {
  dishes: ?Array<Object>,
  activeStep: number
};

class VoteForm extends Component<Props, State> {
  state = {
    dishes: null,
    activeStep: 0
  };

  componentDidMount() {
    this.props.getVoterByID(this.props.match.params.id);
    this.props.getDishes().then(dishes => {
      this.setState({ dishes });
    });
  }

  handleNext = () => {
    this.setState({
      activeStep: this.state.activeStep + 1
    });
  };

  handleBack = () => {
    this.setState({
      activeStep: this.state.activeStep - 1
    });
  };

  render() {
    return (
      <div>
        <Container>
          <Card>
            <VoteWrapper>
              {this.state.dishes && this.props.voter ? (
                <div>
                  <h3>Hey {this.props.voter.name}!</h3>
                  <pre>{JSON.stringify(this.props.voter, null, 2)}</pre>

                  <MobileStepper
                    type="progress"
                    steps={this.state.dishes.length}
                    position="static"
                    activeStep={this.state.activeStep}
                    nextButton={
                      <Button
                        dense
                        onClick={this.handleNext}
                        disabled={this.state.activeStep === this.state.dishes.length}>
                        Next
                        <KeyboardArrowRight />
                      </Button>
                    }
                    backButton={
                      <Button dense onClick={this.handleBack} disabled={this.state.activeStep === 0}>
                        <KeyboardArrowLeft />
                        Back
                      </Button>
                    }
                  />
                </div>
              ) : (
                <Loader />
              )}
            </VoteWrapper>
          </Card>
        </Container>
      </div>
    );
  }
}

function mapStateToProps(store, props) {
  return {
    voter: store.vote.voter
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getDishes, getVoterByID }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(VoteForm);

const VoteWrapper = glamorous.div({
  padding: '16px'
});
