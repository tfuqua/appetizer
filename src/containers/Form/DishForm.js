//@flow
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Button from 'material-ui/Button';
import glamorous from 'glamorous';

import StarForm from './StarForm';

type Props = {
  addVote: Function,
  skipVote: Function,
  dish: Object,
  match: Object
};

type State = {
  vote: Object
};

class DishForm extends Component<Props, State> {
  state = {
    vote: {
      taste: 0,
      originality: 0,
      presentation: 0,
      dish: this.props.dish.id,
      voter: this.props.match.params.id
    }
  };

  componentWillReceiveProps(nextProps: Object) {
    this.setState({
      vote: {
        taste: 0,
        originality: 0,
        presentation: 0,
        dish: nextProps.dish.id,
        voter: nextProps.match.params.id
      }
    });
  }

  vote = () => {
    this.props.addVote(this.state.vote);
  };

  starClick = (field: string, value: number) => {
    this.setState({ vote: { ...this.state.vote, [field]: value } });
  };

  validVote = () => {
    let { taste, originality, presentation } = this.state.vote;

    if (taste > 0 && originality > 0 && presentation > 0) {
      return false;
    }

    return true;
  };

  render() {
    return (
      <div>
        <h2>{this.props.dish.title}</h2>
        <h4>{this.props.dish.description}</h4>

        {this.props.dish.image ? <Img src={`/api/image/${this.props.dish.image}`} alt={this.props.dish.title} /> : null}

        <StarForm field="taste" value={this.state.vote.taste} starClick={this.starClick} />
        <StarForm field="presentation" value={this.state.vote.presentation} starClick={this.starClick} />
        <StarForm field="originality" value={this.state.vote.originality} starClick={this.starClick} />

        <Buttons>
          <Button disabled={this.validVote()} raised color="primary" onClick={this.vote}>
            Vote
          </Button>
          <br /> <br />
          <Button color="primary" onClick={this.props.skipVote}>
            I was naughty and didn't try this dish
          </Button>
        </Buttons>
      </div>
    );
  }
}

export default withRouter(DishForm);

const Buttons = glamorous.div({
  textAlign: 'right'
});

const Img = glamorous.img({
  maxWidth: 100,
  height: 'auto'
});
