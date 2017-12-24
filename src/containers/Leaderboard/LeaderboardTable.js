//@flow
import React, { Component } from 'react';
import Card from 'material-ui/Card';
import Button from 'material-ui/Button';
import glamorous from 'glamorous';

type Props = {
  scores: Array<Object>
};
type State = {
  orderBy: string,
  order: string
};
class LeaderboardTable extends Component<Props, State> {
  state = {
    orderBy: 'total',
    order: 'desc'
  };

  handleSort = (property: string) => {
    if (this.state.orderBy === property && this.state.order === 'desc') {
      this.setState({ order: 'asc' });
    } else {
      this.setState({ orderBy: property, order: 'desc' });
    }
  };

  render() {
    const { order, orderBy } = this.state;
    const data =
      order === 'desc'
        ? this.props.scores.sort((a, b) => (b[orderBy] < a[orderBy] ? -1 : 1))
        : this.props.scores.sort((a, b) => (a[orderBy] < b[orderBy] ? -1 : 1));

    return (
      <div>
        <TextRight>
          <StyledButton active={this.state.orderBy === 'taste'} onClick={() => this.handleSort('taste')}>
            Taste
          </StyledButton>
          <StyledButton active={this.state.orderBy === 'presentation'} onClick={() => this.handleSort('presentation')}>
            Presentation
          </StyledButton>
          <StyledButton active={this.state.orderBy === 'originality'} onClick={() => this.handleSort('originality')}>
            Originality
          </StyledButton>
          <StyledButton active={this.state.orderBy === 'total'} onClick={() => this.handleSort('total')}>
            Total
          </StyledButton>
        </TextRight>

        {data.slice(0, 5).map((score, i) => (
          <DishRow key={i}>
            <div>
              <Number>{score.title}</Number>
              {score.image ? <Img src={`/api/image/${score.image}`} alt={score.title} /> : 'No Image Uploaded'}
            </div>
            <Scores>
              <div>
                Taste: <Score value={score.taste} />
              </div>
              <div>
                Presentation: <Score value={score.presentation} />
              </div>
              <div>
                Originality: <Score value={score.originality} />
              </div>
              <div>
                Total: <Score value={score.total} />
              </div>
            </Scores>
          </DishRow>
        ))}
      </div>
    );
  }
}

const Score = props => {
  return <span>{parseFloat(Math.round(props.value * 100) / 100).toFixed(2)}</span>;
};

export default LeaderboardTable;

const Number = glamorous.div({
  fontWeight: 'bold',
  fontSize: '20px'
});
const Img = glamorous.img({
  width: 120,
  height: 'auto',
  '@media(min-width: 480px)': {
    width: 200
  }
});

const DishRow = glamorous(Card)({
  margin: '16px 0',
  padding: '16px',
  display: 'flex',
  justifyContent: 'space-between'
});

const Scores = glamorous.div({
  padding: '8px 16px',
  textAlign: 'right',
  '& > div': {
    padding: '4px 0',
    fontSize: '16px'
  },
  '@media(min-width: 480px)': {
    '& > div': {
      fontSize: '18px'
    }
  }
});

const TextRight = glamorous.div({
  textAlign: 'right'
});

const StyledButton = glamorous(Button)({}, ({ active }) => ({
  fontWeight: active ? 'bold' : 400
}));
