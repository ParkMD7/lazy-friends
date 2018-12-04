// dependencies
import React, { Component } from 'react';
import { Button, Form, Container } from 'semantic-ui-react';
import { connect } from 'react-redux';

// user files
import { createNewGroup } from '../../actions/createNewGroup'

class NewGroupForm extends Component {
  state = {
    userInput: ''
  }

  handleChange = event => {
    this.setState({userInput: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const newGroupName = this.state.userInput
    // fetch('http://localhost:3000/groups', {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     name: newGroupName,
    //     user: 57
    //   })
    // })
      const userID = this.props.currentUser.id.toString()
      this.props.createNewGroup(userID, newGroupName)
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


const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser.user
  }
}

export default connect(mapStateToProps, { createNewGroup })(NewGroupForm);
