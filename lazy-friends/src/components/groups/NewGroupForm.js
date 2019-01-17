// dependencies
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
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
                    <Form.Input placeholder="Group Name" value={this.state.name} name='name' onChange={this.handleChange} autoComplete='off'/>
                    <br />
                    <TextArea placeholder='Group Description' name='description' value={this.state.description} onChange={this.handleChange} autoComplete='off'/>
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


//
// // dependencies
// import React, { Component } from 'react';
// import { Field, reduxForm } from 'redux-form';
// import { Button, Form, Container, Dropdown, TextArea, Input, Grid, Card, Label } from 'semantic-ui-react';
// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
//
// // user files
// import { createNewGroup } from '../../actions/createNewGroup'
// import { suggestions } from '../../constants/suggestions'
//
//
// class NewGroupForm extends Component {
//
//   // takes all k:v pairs in the formProps object and add them to the element being created
//   renderInput = ({input, placeholder, label}) => {
//     switch (input.name) {
//       debugger
//       return (
//         <>
//           <Form.Field>
//             <Label color='orange' size='large' circular>{label}</Label>
//             <Form.Input {...input} placeholder={placeholder}/>
//           </Form.Field>
//         </>
//       )
//     }
//   }
//
//   render() {
//     return (
//       <Container text textAlign='center'>
//         <Grid>
//           <Grid.Column width={16} fluid centered='true' >
//             <Card centered fluid textalign='center' style={{height: 'auto', width: '700px', backgroundColor: 'rgba(0, 0, 0, 0.8)', color: 'white'}}>
//               <Card.Content centered='true' textalign='center' >
//                 <h1 style={{color:'rgba(250, 208, 155)'}}>Create A New Group</h1>
//                 <br /><br />
//                 <Form size="large" key="large" onSubmit={event => this.handleSubmit(event)} >
//                   <Field name="name" placeholder='Group Name' label='Enter Group Name' component={this.renderInput} />
//                   <Field name="description" placeholder='Group Description' label='Enter Group Description' component={this.renderInput} />
//                   <Field name="preferredSpot" placeholder='Select Preferred Meet Up Spot' component={this.renderInput} />
//
//                   <br />
//                   {/* <Dropdown fluid placeholder='Select Preferred Meet Up Spot' selection options={suggestionsOptions} onChange={this.handleSuggestion}/> */}
//                   <br /><br />
//                   <Button fluid inverted color='red' style={{height: '40px'}} type='submit'>Create Group</Button>
//                 </Form>
//               </Card.Content>
//             </Card>
//           </Grid.Column>
//         </Grid>
//       </Container>
//     );
//   }
//
// }
//
//
// // const mapStateToProps = (state) => {
// //   return {
// //     currentUser: state.currentUser.user
// //   }
// // }
//
// // hooking up reduxForm function to our NewGroupForm component -> reduxForm returns a function and we immediately call that function with NewGroupForm
// export default reduxForm({
//   form: 'NewGroupForm'
// })(NewGroupForm);
