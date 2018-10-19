import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react'

class NewGroupForm extends Component {
  state = {
    userInput: ''
  }

  render() {
    return (
      <Form>
        <Form.Field>
          <label>Name</label>
          <input placeholder='Name' />
        </Form.Field>
      </Form>
    );
  }

}

export default NewGroupForm;
