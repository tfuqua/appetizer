//@flow
import React, { Component } from 'react';
import { TableCell, TableRow } from 'material-ui/Table';
import CancelIcon from 'material-ui-icons/Cancel';
import glamorous from 'glamorous';

import TextField from 'components/TextField';
import FileField from 'components/TextField/FileField';

type Props = {
  dish: Object,
  index: number,
  formChange: Function,
  deleteDish: Function
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
        <StyledTableCell>
          <FileField
            name="img"
            value={this.props.dish.img}
            fieldChange={this.props.formChange.bind(this, this.props.index)}
            placeholder="Enter File"
          />
        </StyledTableCell>
        <StyledTableCell numeric>
          <CancelIcon onClick={this.props.deleteDish.bind(this, this.props.index)} />
        </StyledTableCell>
        <TableCell colSpan={4}>
          <pre>{JSON.stringify(this.props.dish, null, 2)}</pre>
        </TableCell>
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
