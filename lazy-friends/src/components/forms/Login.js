import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link, withRouter, Redirect } from 'react-router-dom'
import { Container, Header, Input, Button } from 'semantic-ui-react'
import { loginUser } from '../../actions/loginUser'

class Login extends Component {
  state = {
    username: '',
    password: ''
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleLogin = e => {
    e.preventDefault()
    this.props.loginUser(this.state.username, this.state.password)
    this.setState({ username: '', password: '' })
  }

  render() {
    return this.props.loggedIn ? (<Redirect to='/' />) :
    (
      <Container text textAlign='center'>
        <Header>Lazy Friends</Header>
        <form onSubmit={this.handleLogin}>
          <Header>Log In</Header>
          <Input size='large' fluid name='username' value={this.state.username} type='text' placeholder="Username" onChange={this.handleChange} /><br/>
          <Input size='large' fluid name='password' value={this.state.password} type='password' placeholder="Password" onChange={this.handleChange} /><br/>
          <Button.Group fluid>
            <Button basic color='blue' type='submit'>Log In</Button>
            <Button basic color='blue' onClick={event => event.preventDefault()}>
              <Link to='/signup'>Sign Up</Link>
            </Button>
          </Button.Group>
        </form>
      </Container>
    );
  }
}

const mapStateToProps = ({ user, authenticatingUser, failedLogin, error, loggedIn }) => (
  {user, authenticatingUser, failedLogin, error, loggedIn}
)

export default withRouter(connect(mapStateToProps, {loginUser})(Login));
