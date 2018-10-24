import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import NavBar from './components/NavBar'
// import NewNavBar from './components/NewNavBar'
import MainPage from './components/MainPage'
import NewGroupForm from './components/groups/NewGroupForm'
import Login from './components/forms/Login'
import SignUp from './components/forms/SignUp'
import Groups from './components/groups/Groups'
import { config } from './components/config'
import './App.css';

class App extends Component {
  state = {
    currentUser: {
      id: 0,
      username: '',
      name: '',
      location: '',
      groups: []
    }
  }

  handleLogin = (event, value) => {
    event.preventDefault()
    // console.log(value)
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
      if(currentUser.status === 'error'){
        const errors = currentUser.message
        alert(errors)
      } else {
        this.setState({
          currentUser: {
            id: currentUser.user.id,
            username: currentUser.user.username,
            name: currentUser.user.name,
            location: currentUser.user.location,
            coordinates: currentUser.user.coordinates,
            groups: currentUser.user.groups
          }
        }, this.handleSignup)
      }
    })
  }

  formatAddress = address => {
    return address.replace(/ /g, '+')
  }

  convertAddressToLatLong = address => {
    return fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${config.apiKey}`).then(res => res.json())
  }

  handleSubmit = (event, value) => {
    event.preventDefault()
    const formattedAddress = this.formatAddress(value.location)
    let latLong
    this.convertAddressToLatLong(formattedAddress).then( addressObj => {
      latLong = `${addressObj.results[0].geometry.location.lat}, ${addressObj.results[0].geometry.location.lng}`
    }).then( () => {
      const newUser = {
        ...value,
        coordinates: latLong
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
              id: currentUser.user.id,
              username: currentUser.user.username,
              name: currentUser.user.name,
              location: currentUser.user.location,
              coordinates: currentUser.user.coordinates,
              groups: currentUser.user.groups
            }
          }, this.handleSignup)
        }
      })
      .catch(err => {
        console.log(err)
      })
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
        location: '',
        groups: []
      }
    })
  }

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <br />
          { this.state.currentUser.username !== '' ?
          <div>
            <NavBar currentUser={this.state.currentUser} handleSignOut={this.handleSignOut} />
          </div> : null
          }
          <br /><br />
          {this.handleSignup()}
          <Route exact path="/" component={ () => <MainPage currentUser={this.state.currentUser} />} />
          <Route exact path='/profile' render={ () => <h1>Profile</h1>} />
          <Route exact path='/newgroup' component={NewGroupForm} />
          <Route exact path='/groups' component={ () => <Groups currentUser={this.state.currentUser} />} />
          <Route exact path='/signup' render={ () => <SignUp handleSubmit={this.handleSubmit} /> } />
          <Route exact path='/login' render={ () => <Login handleLogin={this.handleLogin} /> } />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
