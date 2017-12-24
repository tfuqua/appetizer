//@flow
import React, { Component } from 'react';
import Table, { TableBody, TableCell, TableHead, TableRow, TableSortLabel } from 'material-ui/Table';
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
      <Table>
        <TableHead>
          <TableRow>
            <Cell>Dish</Cell>
            <Cell numeric>
              <TableSortLabel
                active={this.state.orderBy === 'taste'}
                direction={this.state.order}
                onClick={() => this.handleSort('taste')}>
                Taste
              </TableSortLabel>
            </Cell>
            <Cell numeric>
              <TableSortLabel
                active={this.state.orderBy === 'presentation'}
                direction={this.state.order}
                onClick={() => this.handleSort('presentation')}>
                Presentation
              </TableSortLabel>
            </Cell>
            <Cell numeric>
              <TableSortLabel
                active={this.state.orderBy === 'originality'}
                direction={this.state.order}
                onClick={() => this.handleSort('originality')}>
                Originality
              </TableSortLabel>
            </Cell>
            <Cell numeric>
              <TableSortLabel
                active={this.state.orderBy === 'total'}
                direction={this.state.order}
                onClick={() => this.handleSort('total')}>
                Total
              </TableSortLabel>
            </Cell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((score, i) => (
            <TableRow key={i}>
              <Cell>
                {score.image ? <img src={`/api/image/${score.image}`} alt={score.title} /> : null}
                {score.title}
              </Cell>
              <Cell numeric sort={this.state.orderBy === 'taste' ? 'true' : undefined}>
                <Score value={score.taste} />
              </Cell>
              <Cell numeric sort={this.state.orderBy === 'presentation' ? 'true' : undefined}>
                <Score value={score.presentation} />
              </Cell>
              <Cell numeric sort={this.state.orderBy === 'originality' ? 'true' : undefined}>
                <Score value={score.originality} />
              </Cell>
              <Cell numeric sort={this.state.orderBy === 'total' ? 'true' : undefined}>
                <Score value={score.total} />
              </Cell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
}

const Score = props => {
  return <span>{parseFloat(Math.round(props.value * 100) / 100).toFixed(2)}</span>;
};

export default LeaderboardTable;

const Cell = glamorous(TableCell)({}, ({ sort }) => ({
  fontWeight: sort ? '700' : '400'
}));
