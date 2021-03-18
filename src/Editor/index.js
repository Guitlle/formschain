import React from 'react';
import Form from "@rjsf/material-ui";
import './Editor.css';
import formSpec from './FormSpecification.js';

const schema = formSpec.json_schema;
const uiSchema = formSpec.ui_schema;

class Editor extends React.Component {
  submitData (form) {
    console.log(form);
  }

  errorHandler (form) {
    console.log(form);
  }

  render () {
    return (
      <div className="form-editor">
        <Form
          schema={schema}
          uiSchema={uiSchema}
          onSubmit={this.submitData}
          onError={this.errorHandler}
        />
      </div>
    );
  }
}

export default Editor;
