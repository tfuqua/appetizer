// @flow
import React, { Component } from 'react';
import { FormControlLabel } from 'material-ui/Form';
import Checkbox from 'material-ui/Checkbox';

type Props = {
  name: string,
  value?: boolean,
  fieldChange: Function,
  label?: string
};

class CheckboxInput extends Component<Props> {
  handleChange = (name: string) => (e: Event) => {
    this.props.fieldChange(this.props.name, e.target.checked);
  };

  render() {
    return (
      <FormControlLabel
        control={<Checkbox checked={this.props.value} onChange={this.handleChange()} value={this.props.value} />}
        label={this.props.label}
      />
    );
  }
}

export default CheckboxInput;
