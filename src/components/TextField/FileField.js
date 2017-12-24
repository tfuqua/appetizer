// @flow
import React, { Component } from 'react';

class FileField extends Component<*> {
  fileChange = (e: Event) => {
    const file = e.target.files[0];
    this.props.fieldChange(file);
  };

  render() {
    return (
      <div className="input-wrapper">
        <input id="fileInput" type="file" onChange={this.fileChange} />
      </div>
    );
  }
}

export default FileField;
