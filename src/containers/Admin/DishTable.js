//@flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import glamorous from 'glamorous';

import { displayMessage, TOAST_RIGHT } from 'containers/Message/actions';
import DishRow from './DishRow';
import { saveDishes } from './actions';

type Props = {
  dishes: Array<Object>,
  saveDishes: Function,
  displayMessage: Function
};

type State = {
  dishes: Array<Object>
};

class DishTable extends Component<Props, State> {
  state = {
    dishes: this.props.dishes
  };

  formChange = (index: number, field: string, value: any) => {
    let dishes = this.state.dishes;
    let dish = { ...dishes[index], [field]: value };
    dishes.splice(index, 1, dish);

    this.setState({ dishes });
  };

  deleteDish = (index: number) => {
    let dishes = this.state.dishes;
    dishes.splice(index, 1);

    this.setState({ dishes });
  };

  addDish = () => {
    let dishes = this.state.dishes;
    dishes.push({ name: '' });

    this.setState({ dishes });
  };

  handleSubmit = (e: Event) => {
    e.preventDefault();

    this.props.saveDishes(this.state.dishes).then(response => {
      if (response) {
        this.props.displayMessage(response.message, TOAST_RIGHT);
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
              <TableCell>Number</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell numeric>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.dishes.map((dish, i) => (
              <DishRow key={i} index={i} dish={dish} formChange={this.formChange} deleteDish={this.deleteDish} />
            ))}
          </TableBody>
        </Table>
        <TextRight>
          <Button fab raised color="primary" onClick={this.addDish}>
            <AddIcon />
          </Button>
        </TextRight>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ saveDishes, displayMessage }, dispatch);
}

export default connect(null, mapDispatchToProps)(DishTable);

const TextRight = glamorous.div({
  textAlign: 'right'
});
