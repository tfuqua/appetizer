//@flow
import React, { Component } from 'react';
import StarIcon from 'material-ui-icons/Star';
import EmptyStar from 'material-ui-icons/StarBorder';
import glamorous from 'glamorous';

type Props = {
  field: string,
  value: number,
  starClick: Function
};

class StarForm extends Component<Props> {
  vote = (value: number) => {
    this.props.starClick(this.props.field, value);
  };

  render() {
    return (
      <StarWrapper>
        <Field>{this.props.field}</Field>

        {Array.apply(null, Array(5)).map((item, i) => (
          <Vote key={i}>
            {i + 1 > this.props.value ? (
              <EmptyStar onClick={this.vote.bind(this, i + 1)} />
            ) : (
              <StarIcon onClick={this.vote.bind(this, i + 1)} />
            )}
          </Vote>
        ))}
      </StarWrapper>
    );
  }
}

export default StarForm;

const StarWrapper = glamorous.div({
  display: 'flex',
  alignItems: 'center',
  padding: '16px 0'
});

const Field = glamorous.label({
  textTransform: 'capitalize',
  fontSize: '18px',
  minWidth: '115px'
});

const Vote = glamorous.div({
  '& svg': {
    height: 35,
    width: 35,
    margin: 6,
    '&:hover': {
      cursor: 'pointer'
    }
  }
});
