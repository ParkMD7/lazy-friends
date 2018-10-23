import React, { Component } from 'react';
import { Button, Form, Container } from 'semantic-ui-react'

class NewGroupForm extends Component {
  state = {
    userInput: ''
  }

  handleChange = event => {
    this.setState({userInput: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault()
    const newGroupName = this.state.userInput
    fetch('http://localhost:3000/groups', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: newGroupName,
        user: 57
      })
    })
  }

  render() {
    return (
      <Container style={{width: '350px'}}>
        <Form onSubmit={event => this.handleSubmit(event)}>
          <Form.Field>
            <label>Group Name</label>
            <input placeholder='Name' value={this.state.userInput} onChange={this.handleChange} />
          </Form.Field>
          <Button fluid type='submit'>Create Group</Button>
        </Form>
      </Container>
    );
  }

}

export default NewGroupForm;
