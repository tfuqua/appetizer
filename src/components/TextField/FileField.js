// @flow
import React, { Component } from 'react';
import Button from 'material-ui/Button';

class FileField extends Component<*> {
  state = {
    file: null
  };

  fileChange = (e: Event) => {
    const file = e.target.files[0];
    this.props.fieldChange(file);
  };

  render() {
    return (
      <div className="input-wrapper">
        <input id="fileInput" type="file" style={{ display: 'none' }} onChange={this.fileChange} />
        <Button onClick={() => document.getElementById('fileInput').click()}>Browse</Button>
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
      </div>
    );
  }
}

export default FileField;
