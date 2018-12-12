import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link, withRouter, Redirect } from 'react-router-dom'
import { Container, Header, Input, Button, Form, Grid, Card, Message } from 'semantic-ui-react'
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
        <Grid>
          <Grid.Column width={16} fluid centered='true' >
            <Card centered fluid textalign='center' style={{height: 'auto', width: '700px'}}>
              <Card.Content centered='true' textalign='center' >
                <h1>Log In & Find The Middle Point For You and Your <span style={{color:'blue'}}>LAZYfriends</span></h1>
                <br /><br />
                <Form size="large" key="large" onSubmit={this.handleLogin} loading={this.props.authenticatingUser} error={this.props.failedLogin} >
                  <Message error header={this.props.failedLogin ? this.props.error : null} />
                  <Form.Input placeholder="username" name="username" onChange={this.handleChange} value={this.state.username} />
                  <br />
                  <Form.Input type="password" placeholder="password" name="password" onChange={this.handleChange} value={this.state.password} />
                  <Button inverted color='red' type='submit' style={{height: '35px', width: '150px', 'text-color': 'white'}}>Log In</Button>
                  <br /><br />
                  <h3>Don't Already Have An Account?</h3>
                  <Button inverted color='red' style={{height: '35px', width: '150px'}} onClick={event => event.preventDefault()}>
                    <Link to='/signup' style={{color: '#DD6A64'}}>Sign Up</Link>
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

const mapStateToProps = ({ currentUser: { user, authenticatingUser, failedLogin, error, loggedIn }}) => {
  return {user, authenticatingUser, failedLogin, error, loggedIn}
}

export default withRouter(connect(mapStateToProps, {loginUser})(Login));
