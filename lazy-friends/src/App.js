import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom'
import NavBar from './components/NavBar'
// import NewNavBar from './components/NewNavBar'
import MainPage from './components/MainPage'
import NewGroupForm from './components/groups/NewGroupForm'
import Login from './components/forms/Login'
import SignUp from './components/forms/SignUp'
import Groups from './components/groups/Groups'
import { config } from './components/config'
import { loginOrSignup, signout } from './actions/currentUser'
import { selectGroup } from './actions/currentGroup'
import './App.css';


class App extends Component {

  // componentDidMount(){
  //   if(!!localStorage.getItem('jwt')){
  //     fetch('http://localhost:3000/profile', {
  //       method: 'GET',
  //       headers: {
  //         'Authorization': `Bearer ${localStorage.getItem('jwt')}`
  //       }
  //     }).then(res => res.json()).then( user => this.props.loginOrSignup(user.user))
  //   }
  // }
  //
  // handleLogin = (event, value) => {
  //   event.preventDefault()
  //   fetch('http://localhost:3000/login', {
  //     method: 'POST',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({user: {...value}})
  //   })
  //   .then( res => res.json())
  //   .then( currentUser => {
  //     if(currentUser.status === 'error'){
  //       const errors = currentUser.message
  //       alert(errors)
  //     } else {
  //       const user = {
  //         id: currentUser.user.id,
  //         username: currentUser.user.username,
  //         name: currentUser.user.name,
  //         location: currentUser.user.location,
  //         coordinates: currentUser.user.coordinates,
  //         groups: currentUser.user.groups,
  //         profile_url: currentUser.user.profile_url
  //       }
  //       localStorage.setItem('jwt', currentUser.jwt)
  //       this.props.loginOrSignup(user)
  //       if(this.props.currentUser.groups.length !== 0){
  //         this.props.selectGroup(this.props.currentUser.groups[0])
  //       }
  //     }
  //   })
  // }
  //
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

  render() {
    return (
        <React.Fragment>
          <br />
          { /*this.props.currentUser.username !== '' ?
          <div>
            <NavBar currentUser={this.props.currentUser} handleSignOut={this.handleSignOut} />
          </div> : null*/
          }
          <NavBar />
          <br /><br />
          {/*this.handleSignup()*/}
          <Switch>
            <Route exact path="/" component={ () => <MainPage /> } />
            <Route exact path='/profile' render={ () => <h1>Profile</h1>} />
            <Route exact path='/newgroup' component={NewGroupForm} />
            <Route exact path='/groups' component={ () => <Groups />} />
            <Route exact path='/signup' render={ () => <SignUp /> } />
            <Route exact path='/login' render={ () => <Login /> } />
          </Switch>
        </React.Fragment>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     currentUser: state.currentUser
//   }
// }

export default withRouter(App)
// export default connect(mapStateToProps, { loginOrSignup, signout, selectGroup })(App);
