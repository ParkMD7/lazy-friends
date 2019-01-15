// dependencies
import React, { Component } from 'react';
import { Button, Form, Container, Dropdown, TextArea, Input, Grid, Card } from 'semantic-ui-react';
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
      <Container text textAlign='center'>
        <Grid>
          <Grid.Column width={16} fluid centered='true' >
            <Card centered fluid textalign='center' style={{height: 'auto', width: '700px', backgroundColor: 'rgba(0, 0, 0, 0.8)', color: 'white'}}>
              <Card.Content centered='true' textalign='center' >
                <h1 style={{color:'rgba(250, 208, 155)'}}>Create A New Group</h1>
                <br /><br />
                <Form size="large" key="large" onSubmit={event => this.handleSubmit(event)} >
                  <Form.Field>
                    <Form.Input placeholder="Group Name" value={this.state.name} name='name' onChange={this.handleChange} />
                    <br />
                    <TextArea placeholder='Group Description' name='description' value={this.state.description} onChange={this.handleChange} />
                  </Form.Field>
                  <br />
                  <Dropdown fluid placeholder='Select Preferred Meet Up Spot' selection options={suggestionsOptions} onChange={this.handleSuggestion}/>
                  <br /><br />
                  <Button fluid inverted color='red' style={{height: '40px'}} type='submit'>Create Group</Button>
                </Form>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid>
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
