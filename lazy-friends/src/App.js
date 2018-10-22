import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import NavBar from './components/NavBar'
// import NewNavBar from './components/NewNavBar'
import MainPage from './components/MainPage'
import NewGroupForm from './components/groups/NewGroupForm'
import Login from './components/forms/Login'
import SignUp from './components/forms/SignUp'
import './App.css';

function handleErrors(response) {
    console.log(response)
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response.json();
}

class App extends Component {
  state = {
    currentUser: {
      id: 0,
      username: '',
      name: '',
      location: ''
    }
  }

  handleLogin = (event, value) => {
    event.preventDefault()
    console.log(value)
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(value)
    })
    .then( res => res.json())
    .then( currentUser => {
      this.setState({
        currentUser: {
          id: currentUser.id,
          username: currentUser.username,
          name: currentUser.name,
          location: currentUser.location,
          coordinates: currentUser.coordinates
        }
      }, this.handleSignup)
    })
  }

  handleSubmit = (event, value) => {
    event.preventDefault()
    const newUser = {
      ...value,
      coordinates: '40.712776, -74.005974'
    }
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    })
    .then(res => res.json())
    .then( currentUser => {
      if(currentUser.status === 'error'){
        const errors = Object.keys(currentUser.message).map( (inputFieldName, index) => {
          return inputFieldName + ' ' + currentUser.message[inputFieldName] + '\n'
        }).join('')
        alert(errors)
      } else {
        this.setState({
          currentUser: {
            id: currentUser.id,
            username: currentUser.username,
            name: currentUser.name,
            location: currentUser.location,
            coordinates: currentUser.coordinates
          }
        }, this.handleSignup)
      }
    })
    .catch(err => {
      console.log(err)
    })
  }

  handleSignup = () => {
    return this.state.currentUser.username !== '' ? <Redirect to='/'/> : <Redirect to='/login'/>
  }

  handleSignOut = () => {
    this.setState({
      currentUser: {
        id: 0,
        username: '',
        name: '',
        location: ''
      }
    })
  }

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <br />
          <div>
            <NavBar currentUser={this.state.currentUser} handleSignOut={this.handleSignOut} />
          </div>
          <br /><br />
          {this.handleSignup()}
          <Route exact path="/" component={ () => <MainPage currentUser={this.state.currentUser} />} />
          <Route exact path='/profile' render={ () => <h1>Profile</h1>} />
          <Route exact path='/newgroup' component={NewGroupForm} />
          <Route exact path='/users' render={ () => <h1>Users</h1>} />
          <Route exact path='/signup' render={ () => <SignUp handleSubmit={this.handleSubmit} /> } />
          <Route exact path='/login' render={ () => <Login handleLogin={this.handleLogin} /> } />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
