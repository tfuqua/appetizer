//@flow
import React, { Component } from 'react';
import { TableCell, TableRow } from 'material-ui/Table';
import CancelIcon from 'material-ui-icons/Cancel';

import TextField from 'components/TextField';

type Props = {
  voter: Object,
  index: number,
  formChange: Function,
  deleteVoter: Function
};

class VoterRow extends Component<Props> {
  render() {
    return (
      <TableRow>
        <TableCell>
          <TextField
            name="name"
            value={this.props.voter.name}
            fieldChange={this.props.formChange.bind(this, this.props.index)}
            placeholder="Enter Voter Name"
          />
        </TableCell>
        <TableCell>{this.props.voter.voted ? 'voted' : 'hasnt voted'}</TableCell>
        <TableCell>
          <CancelIcon onClick={this.props.deleteVoter.bind(this, this.props.index)} />
        </TableCell>
      </TableRow>
    );
  }
}

export default VoterRow;
