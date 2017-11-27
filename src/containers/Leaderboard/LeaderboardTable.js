//@flow
import React, { Component } from 'react';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

class LeaderboardTable extends Component<*> {
  render() {
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Dish</TableCell>
            <TableCell>Taste</TableCell>
            <TableCell>Presentation</TableCell>
            <TableCell>Originality</TableCell>
            <TableCell>Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.props.scores.map((score, i) => (
            <TableRow>
              <TableCell>{score.title}</TableCell>
              <TableCell>{score.taste}</TableCell>
              <TableCell>{score.presentation}</TableCell>
              <TableCell>{score.originality}</TableCell>
              <TableCell>{score.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
}

export default LeaderboardTable;
