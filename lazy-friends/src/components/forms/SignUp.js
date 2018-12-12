import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Container, Header, Input, Button, Label, Form } from 'semantic-ui-react'
import { signUpUser } from '../../actions/loginUser'
import { config } from '../config'

class SignUp extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    name: '',
    location: '',
    profile_url: ''
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  formatAddress = address => {
    return address.replace(/ /g, '+')
  }

  convertAddressToLatLong = address => {
    return fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${config.apiKey}`).then(res => res.json())
  }

  handleSubmit = (event, formData) => {
    const formattedAddress = this.formatAddress(formData.location)
    debugger
    let latLong = ''
    this.convertAddressToLatLong(formattedAddress).then( addressObj => {
      latLong = `${addressObj.results[0].geometry.location.lat},${addressObj.results[0].geometry.location.lng}`
    }).then( () => {
      const newUser = { ...formData, coordinates: latLong }
      this.props.signUpUser(newUser)
      this.setState({
        username: '',
        email: '',
        password: '',
        name: '',
        location: '',
        profile_url: ''
      })
    })
  }

  render() {
    return (
      <Container text textAlign='center'>
      <Header>Lazy Friends</Header>
        <Form onSubmit={event => this.handleSubmit(event, this.state)}>
          <Header>Sign Up</Header>
          <Container textAlign='left'>
            <Input size='large' fluid name='name' value={this.state.name} type='text' placeholder="Name" onChange={this.handleChange} /><br />
          </Container>
          <Container textAlign='left'>
            <Input size='large' fluid name='email' value={this.state.email} type='text' placeholder="Email" onChange={this.handleChange} /><br />
          </Container>
          <Container textAlign='left'>
            <Input size='large' fluid name='location' value={this.state.location} type='text' placeholder="Location" onChange={this.handleChange} /><br />
          </Container>
          <Container textAlign='left'>
            <Input size='large' fluid name='username' value={this.state.username} type='text' placeholder="Username" onChange={this.handleChange} /><br />
          </Container>
          <Container textAlign='left'>
            <Input size='large' fluid name='password' value={this.state.password} type='password' placeholder="Password" onChange={this.handleChange} /><br/>
          </Container>
          <Container textAlign='left'>
            <Input size='large' fluid name='profile_url' value={this.state.profile_url} type='text' placeholder="Profile Picture URL" onChange={this.handleChange} /><br/>
          </Container>
          <Button.Group fluid>
            <Button basic color='blue' type='submit'>Sign Up</Button>
          </Button.Group>
        </Form>
      </Container>
    );
  }

}

export default connect(null, { signUpUser })(SignUp);

// formatAddress = address => {
//   return address.replace(/ /g, '+')
// }
//
// convertAddressToLatLong = address => {
//   return fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${config.apiKey}`).then(res => res.json())
// }
//
// handleSubmit = (event, value) => {
//   event.preventDefault()
//   const formattedAddress = this.formatAddress(value.location)
//   let latLong
//   this.convertAddressToLatLong(formattedAddress).then( addressObj => {
//     latLong = `${addressObj.results[0].geometry.location.lat}, ${addressObj.results[0].geometry.location.lng}`
//   }).then( () => {
//     const newUser = {
//       ...value,
//       coordinates: latLong
//     }
//     fetch('http://localhost:3000/users', {
//       method: 'POST',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(newUser)
//     })
//     .then(res => res.json())
//     .then( currentUser => {
//       if(currentUser.status === 'error'){
//         const errors = Object.keys(currentUser.message).map( (inputFieldName, index) => {
//           return inputFieldName + ' ' + currentUser.message[inputFieldName] + '\n'
//         }).join('')
//         alert(errors)
//       } else {
//         const user = {
//           id: currentUser.user.id,
//           username: currentUser.user.username,
//           name: currentUser.user.name,
//           location: currentUser.user.location,
//           coordinates: currentUser.user.coordinates,
//           groups: currentUser.user.groups,
//           profile_url: currentUser.user.profile_url
//         }
//         localStorage.setItem('jwt', currentUser.jwt)
//         this.props.loginOrSignup(user)
//         if(this.props.currentUser.groups.length !== 0){
//           this.props.selectGroup(this.props.currentUser.groups[0])
//         }
//       }
//     })
//     .catch(err => {
//       console.log(err)
//     })
//   })
// }
//
// handleSignup = () => {
//   return !!localStorage.getItem('jwt') ? <Redirect to='/'/> : <Redirect to='/login'/>
// }
//
// handleSignOut = () => {
//   const user = {
//     id: 0,
//     username: '',
//     name: '',
//     location: '',
//     groups: []
//   }
//   localStorage.removeItem('jwt')
//   this.props.signout(user)
// }
