import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Container, Header, Input, Button, Label } from 'semantic-ui-react'

class SignUp extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    name: '',
    location: ''
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <Container text textAlign='center'>
      <Header>Lazy Friends</Header>
        <form onSubmit={event => this.props.handleSubmit(event, this.state)}>
          <Header>Sign Up</Header>
          <Container textAlign='left'>
            <Label>Name *</Label>
            <Input size='large' fluid name='name' value={this.state.name} type='text' placeholder="Name" onChange={this.handleChange} />
          </Container>
          <Container textAlign='left'>
            <Label>Email *</Label>
            <Input size='large' fluid name='email' value={this.state.email} type='text' placeholder="Email" onChange={this.handleChange} />
          </Container>
          <Container textAlign='left'>
            <Label>Home Location *</Label>
            <Input size='large' fluid name='location' value={this.state.location} type='text' placeholder="Location" onChange={this.handleChange} />
          </Container>
          <Container textAlign='left'>
            <Label>Username *</Label>
            <Input size='large' fluid name='username' value={this.state.username} type='text' placeholder="Username" onChange={this.handleChange} />
          </Container>
          <Container textAlign='left'>
            <Label>Password (6 characters minimum)</Label>
            <Input size='large' fluid name='password' value={this.state.password} type='password' placeholder="Password" onChange={this.handleChange} /><br/><br/>
          </Container>
          <Button.Group fluid>
            <Button basic color='blue' type='submit'>Sign Up</Button>
            <Button basic color='blue'>
              <Link to='/login'>Log In</Link>
            </Button>
          </Button.Group>
        </form>
      </Container>
    );
  }

}

export default SignUp;

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
