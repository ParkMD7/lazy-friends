import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link, Redirect, withRouter } from 'react-router-dom'
import { Container, Header, Input, Button, Form, Grid, Message, Card } from 'semantic-ui-react'
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
    return this.props.loggedIn ? ( <Redirect to="/" /> ) : (
      <Container text textAlign='center'>
        <Grid>
          <Grid.Column width={16} fluid centered='true' >
            <Card centered textalign='center' style={{height: 'auto', width: '700px'}}>
              <Card.Content>
                <Form size="large" key="large" onSubmit={(event) => this.handleSubmit(event, this.state)} loading={this.props.authenticatingUser} error={this.props.failedLogin} >
                  <h1>Sign Up & Find The Middle Point For You and Your <span style={{color:'blue'}}>LAZYfriends</span></h1>
                  <br />
                  <Form.Field>
                    <Input
                      placeholder='Name'
                      name='name'
                      value={this.state.name}
                      onChange={this.handleChange} />
                  </Form.Field>
                  <Form.Field>
                    <Input
                      placeholder='Username'
                      name='username'
                      value={this.state.username}
                      onChange={this.handleChange} />
                  </Form.Field>
                  <Form.Field>
                    <Input
                      placeholder='Email'
                      name='email'
                      value={this.state.email}
                      onChange={this.handleChange} />
                  </Form.Field>
                  <Form.Field>
                    <Input
                      placeholder='Password'
                      name='password'
                      value={this.state.password}
                      type='password'
                      onChange={this.handleChange} />
                  </Form.Field>
                  <Form.Field>
                    <Input
                      placeholder='Location'
                      name='location'
                      value={this.state.location}
                      onChange={this.handleChange} />
                  </Form.Field>
                  <Form.Field>
                    <Input
                      placeholder='Profile Picture URL'
                      name='profile_url'
                      value={this.state.profile_url}
                      onChange={this.handleChange} />
                  </Form.Field>
                  <Button inverted color='red' type='submit' style={{height: '35px', width: '150px'}}>Sign Up</Button>
                  <h3>Already Have An Account?</h3>
                  <Button inverted color='red' style={{height: '35px', width: '150px'}} onClick={event => event.preventDefault()}>
                    <Link to='/login' style={{color: '#DD6A64'}}>Log In</Link>
                  </Button>
                </Form>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }

}

const mapStateToProps = ({ currentUser: { authenticatingUser, failedLogin, error, loggedIn } }) => ({
  authenticatingUser,
  failedLogin,
  error,
  loggedIn
})

export default withRouter(connect(mapStateToProps, { signUpUser })(SignUp))
