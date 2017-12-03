//@flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import glamorous from 'glamorous';

import VoterRow from './VoterRow';
import { saveVoters } from './actions';

type Props = {
  voters: Array<Object>,
  saveVoters: Function
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

  addVoter = () => {
    let voters = this.state.voters;
    voters.push({ name: '', voted: false });

    this.setState({ voters });
  };

  handleSubmit = (e: Event) => {
    e.preventDefault();

    this.props.saveVoters(this.state.voters).then(response => {
      if (response) {
        console.log(response);
      }
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <TextRight>
          <Button raised color="primary" type="submit">
            Save
          </Button>
        </TextRight>
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
        <TextRight>
          <Button fab raised color="primary" onClick={this.addVoter}>
            <AddIcon />
          </Button>
        </TextRight>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ saveVoters }, dispatch);
}

export default connect(null, mapDispatchToProps)(VoterTable);

const TextRight = glamorous.div({
  textAlign: 'right'
});
