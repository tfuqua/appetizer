//@flow
import React, { Component } from 'react';
import { TableCell, TableRow } from 'material-ui/Table';
import CancelIcon from 'material-ui-icons/Cancel';
import IconButton from 'material-ui/IconButton';
import FileIcon from 'material-ui-icons/FileUpload';
import glamorous from 'glamorous';

import TextField from 'components/TextField';

type Props = {
  dish: Object,
  index: number,
  formChange: Function,
  deleteDish: Function,
  imageToggle: Function
};

class DishRow extends Component<Props> {
  render() {
    return (
      <TableRow>
        <StyledTableCell>
          <TextField
            name="title"
            value={this.props.dish.title}
            fieldChange={this.props.formChange.bind(this, this.props.index)}
            placeholder="Enter Dish Title"
          />
        </StyledTableCell>
        <StyledTableCell>
          <TextField
            name="description"
            value={this.props.dish.description}
            fieldChange={this.props.formChange.bind(this, this.props.index)}
            placeholder="Enter Dish Description"
          />
        </StyledTableCell>
        <StyledTableCell numeric>
          <IconButton onClick={() => this.props.imageToggle(this.props.dish.id)}>
            <FileIcon />
          </IconButton>
          <IconButton onClick={this.props.deleteDish.bind(this, this.props.index)}>
            <CancelIcon />
          </IconButton>
        </StyledTableCell>
      </TableRow>
    );
  }
}

export default DishRow;

const StyledTableCell = glamorous(TableCell)({
  '> div': {
    width: '100%'
  }
});
