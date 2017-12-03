//@flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

import TextField from 'components/TextField';
import VoterRow from './VoterRow';
import {} from './actions';

type Props = {
  voters: Array<Object>
};
type State = {
  voters: Array<Object>
};

class VoterTable extends Component<Props, State> {
  state = {
    voters: this.props.voters
  };

  formChange = (index: number, field: string, value: any) => {
    let voters = this.state.voters;
    let voter = { ...voters[index], [field]: value };

    voters.splice(index, 1, voter);

    this.setState({ voters });
  };

  deleteVoter = (index: number) => {
    let voters = this.state.voters;
    voters.splice(index, 1);

    this.setState({ voters });
  };

  render() {
    return (
      <div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Voted</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.voters.map((voter, i) => (
              <VoterRow key={i} index={i} voter={voter} formChange={this.formChange} deleteVoter={this.deleteVoter} />
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(null, mapDispatchToProps)(VoterTable);
