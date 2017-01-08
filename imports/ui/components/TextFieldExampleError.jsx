import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const TextFieldExampleError = () => (
  <div>
    <TextField
      hintText="Title"
      errorText="This field is required"
    /><br />
    <RaisedButton label="Upload Image" default={true}/>
    <br />
    <RaisedButton label="Upload Video" default={true}/>
    <br />
    <TextField
      hintText="Hint Text"
      errorText="The error text can be as long as you want, it will wrap."
    /><br />
    <TextField
      hintText="Hint Text"
      errorText="This field is required"
      floatingLabelText="Floating Label Text"
    /><br />
    <TextField
      hintText="Description"
      errorText="This field is required."
      floatingLabelText="MultiLine and FloatingLabel"
      multiLine={true}
      rows={2}
    /><br />
  </div>
);

export default TextFieldExampleError;
