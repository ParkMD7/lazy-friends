// dependencies
import React, { Component } from 'react';
import { Button, Form, Container, Dropdown, TextArea, Input } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// user files
import { createNewGroup } from '../../actions/createNewGroup'
import { suggestions } from '../../constants/suggestions'

class NewGroupForm extends Component {
  state = { name: '', suggestion: '', description: '' }

  handleChange = event => this.setState({[event.target.name]: event.target.value})

  handleSuggestion = (event, s) => this.setState({suggestion: s.value})

  handleSubmit = event => {
    event.preventDefault()
    const { name, suggestion, description } = this.state
    const userID = this.props.currentUser.id.toString()
    this.props.createNewGroup(userID, name, suggestion, description)
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
              <br />
              <Input placeholder='Name' value={this.state.name} name='name' onChange={this.handleChange} />
              <br /><br />
              <TextArea placeholder='Group Description' name='description' value={this.state.description} onChange={this.handleChange}  />
            </Form.Field>
            <br />
            <Dropdown placeholder='Select Preferred Meet Up Spot' fluid selection options={suggestionsOptions} onChange={this.handleSuggestion}/>
            <br />
            <Button fluid type='submit'>Create Group</Button>
            <br />
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
