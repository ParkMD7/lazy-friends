// dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter, Redirect } from 'react-router-dom';

// user files
import { Container, Header, Input, Button, Form, Grid, Card, Message } from 'semantic-ui-react'
import { loginUser } from '../../actions/loginUser'
import GoogleAuth from '../googleAuth/GoogleAuth'

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
    if(!!this.props.location.state){
      if(!!this.props.location.state.fromPage){
        this.props.history.push({ pathname: this.props.location.state.oldPath })
      }
    }
    this.setState({ username: '', password: '' })
  }

  handleLink = () => {
    if(!!this.props.location.state){
      if(!!this.props.location.state.fromPage){
        return <Redirect to={this.props.location.state.oldPath} />
      }
    } else {
      return <Redirect to='/' />
    }
  }

  render() {
    return this.props.loggedIn ? this.handleLink() :
     (
      <Container text textAlign='center'>
        <Grid>
          <Grid.Column width={16} fluid centered='true' >
            <Card centered fluid textalign='center' style={{height: 'auto', width: '700px', backgroundColor: 'rgba(0, 0, 0, 0.8)', color: 'white'}}>
              <Card.Content centered='true' textalign='center' >
                <h1>Log In & Find The Middle Point For You and Your <span style={{color:'rgba(250, 208, 155)'}}>LazyFriends</span></h1>
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
                    {
                      !!this.props.location.state ? 
                      <Link to={{ pathname: '/signup', state: { fromPage: this.props.location.state.fromPage, oldPath: this.props.location.state.oldPath }}} style={{color: '#DD6A64'}}>Sign Up</Link> :
                      <Link to='/signup' style={{color: '#DD6A64'}}>Sign Up</Link>
                    }
                  </Button>
                  <h3>Or</h3>
                  <GoogleAuth />
                </Form>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = ({ currentUser: { user, authenticatingUser, failedLogin, error, loggedIn }}, ownProps) => {
  return {user, authenticatingUser, failedLogin, error, loggedIn}
}

export default withRouter(connect(mapStateToProps, {loginUser})(Login));
