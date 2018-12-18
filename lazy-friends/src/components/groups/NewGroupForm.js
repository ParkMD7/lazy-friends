// dependencies
import React, { Component } from 'react';
import { Button, Form, Container, Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// user files
import { createNewGroup } from '../../actions/createNewGroup'
import { suggestions } from '../../constants/suggestions'

class NewGroupForm extends Component {
  state = { userInput: '', suggestion: '' }

  handleChange = event => this.setState({userInput: event.target.value})

  handleSuggestion = (event, s) => {
    debugger
    this.setState({suggestion: s.value})
  }

  handleSubmit = event => {
    event.preventDefault()
    const newGroupName = this.state.userInput
    const suggestion = this.state.suggestion
    const userID = this.props.currentUser.id.toString()
    this.props.createNewGroup(userID, newGroupName, suggestion)
    this.props.history.push({ pathname: '/' })
  }

  formatName = suggestion => {
    let splitSuggestion = suggestion.split('_')
    return splitSuggestion.map(suggestion => suggestion.charAt(0).toUpperCase() + suggestion.slice(1)).join(' ')
  }

  formatSuggestions = () => suggestions.map(suggestion => ({...suggestion, text: this.formatName(suggestion), value: suggestion}))

  render() {
    const suggestionsOptions = this.formatSuggestions()
    return (
      <Container style={{width: '350px'}}>
        <Form onSubmit={event => this.handleSubmit(event)}>
          <Form.Field>
            <label>Group Name</label>
            <input placeholder='Name' value={this.state.userInput} onChange={this.handleChange} />
          </Form.Field>
          <Dropdown placeholder='Select Preferred Meet Up Spot' fluid selection options={suggestionsOptions} onChange={this.handleSuggestion}/>
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

export default withRouter(connect(mapStateToProps, { createNewGroup })(NewGroupForm));
