//@flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Dialog, { DialogActions, DialogContent, DialogContentText, DialogTitle } from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import glamorous from 'glamorous';

import { displayMessage, TOAST_RIGHT } from 'containers/Message/actions';
import { saveDishes, uploadImage } from './actions';
import FileField from 'components/TextField/FileField';
import DishRow from './DishRow';

type Props = {
  dishes: Array<Object>,
  saveDishes: Function,
  displayMessage: Function,
  uploadImage: Function
};

type State = {
  dishes: Array<Object>,
  id: ?number,
  open: boolean
};

class DishTable extends Component<Props, State> {
  state = {
    dishes: this.props.dishes,
    id: null,
    open: false
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

  imageToggle = (id: number) => {
    this.setState({ id, open: true });
  };

  fileChange = (file: any) => {
    this.props.uploadImage(this.state.id, file).then(response => {
      console.log(response);
    });
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
      <div>
        <form onSubmit={this.handleSubmit}>
          <TextRight>
            <Button raised color="primary" type="submit">
              Save
            </Button>
          </TextRight>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell>Description</TableCell>
                <TableCell numeric>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.dishes.map((dish, i) => (
                <DishRow
                  key={i}
                  index={i}
                  dish={dish}
                  imageToggle={this.imageToggle}
                  formChange={this.formChange}
                  deleteDish={this.deleteDish}
                />
              ))}
            </TableBody>
          </Table>
          <TextRight>
            <br />
            <Button fab raised color="primary" onClick={this.addDish}>
              <AddIcon />
            </Button>
          </TextRight>
        </form>

        <Dialog open={this.state.open} onClose={() => this.setState({ open: false })}>
          <DialogTitle>Upload Image</DialogTitle>
          <DialogContent>
            <form onSubmit={this.handleSubmit} encType="multipart/form-data">
              <DialogContentText id="alert-dialog-description">
                <FileField fieldChange={this.fileChange} name="file" />
              </DialogContentText>
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} raised color="primary" autoFocus>
              Upload
            </Button>
          </DialogActions>
        </Dialog>

        <img src="/api/image/test.png" alt="" />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ saveDishes, uploadImage, displayMessage }, dispatch);
}

export default connect(null, mapDispatchToProps)(DishTable);

const TextRight = glamorous.div({
  textAlign: 'right'
});
