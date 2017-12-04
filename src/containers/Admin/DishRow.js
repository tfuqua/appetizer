//@flow
import React, { Component } from 'react';
import { TableCell, TableRow } from 'material-ui/Table';
import CancelIcon from 'material-ui-icons/Cancel';

import TextField from 'components/TextField';

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
        <TableCell>
          <TextField
            name="number"
            value={this.props.dish.number}
            fieldChange={this.props.formChange.bind(this, this.props.index)}
            placeholder="Enter Dish Number"
          />
        </TableCell>
        <TableCell>
          <TextField
            name="title"
            value={this.props.dish.title}
            fieldChange={this.props.formChange.bind(this, this.props.index)}
            placeholder="Enter Dish Title"
          />
        </TableCell>
        <TableCell>
          <TextField
            name="description"
            value={this.props.dish.description}
            fieldChange={this.props.formChange.bind(this, this.props.index)}
            placeholder="Enter Dish Description"
          />
        </TableCell>
        <TableCell numeric>
          <CancelIcon onClick={this.props.deleteDish.bind(this, this.props.index)} />
        </TableCell>
      </TableRow>
    );
  }
}

export default DishRow;
