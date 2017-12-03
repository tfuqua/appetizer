// @flow
import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

type Props = {
  name: string,
  value?: any,
  placeholder?: string,
  fieldChange: Function,
  label?: string
};

class Input extends Component<Props> {
  handleChange = (name: string) => (e: Event) => {
    this.props.fieldChange(this.props.name, e.target.value);
  };
  render() {
    return (
      <TextField
        label="Name"
        placeholder={this.props.placeholder}
        value={this.props.value}
        onChange={this.handleChange(this.props.name)}
        margin="normal"
      />
    );
  }
}

export default Input;
