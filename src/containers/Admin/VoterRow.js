//@flow
import React, { Component } from 'react';
import { TableCell, TableRow } from 'material-ui/Table';
import CancelIcon from 'material-ui-icons/Cancel';
import glamorous from 'glamorous';

import Checkbox from 'components/Checkbox';
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
        <StyledTableCell>
          <TextField
            name="name"
            value={this.props.voter.name}
            fieldChange={this.props.formChange.bind(this, this.props.index)}
            placeholder="Enter Voter Name"
          />
        </StyledTableCell>
        <StyledTableCell numeric>
          <Checkbox
            name="voted"
            value={this.props.voter.voted}
            fieldChange={this.props.formChange.bind(this, this.props.index)}
          />
        </StyledTableCell>
        <StyledTableCell numeric>
          <CancelIcon onClick={this.props.deleteVoter.bind(this, this.props.index)} />
        </StyledTableCell>
      </TableRow>
    );
  }
}

export default VoterRow;

const StyledTableCell = glamorous(TableCell)({
  '> div': {
    width: '100%'
  }
});
