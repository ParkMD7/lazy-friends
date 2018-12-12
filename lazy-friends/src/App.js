// dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom'

// user files
import NavBarContainer from './components/NavBarContainer'
import MainPage from './components/MainPage'
import NewGroupForm from './components/groups/NewGroupForm'
import Login from './components/forms/Login'
import SignUp from './components/forms/SignUp'
import Groups from './components/groups/Groups'
import { fetchCurrentUser } from './actions/loginUser'
import './App.css';


class App extends Component {
  componentDidMount(){
    if(!!localStorage.getItem('jwt')){
      this.props.fetchCurrentUser()
    }
  }

  render() {
    return (
        <React.Fragment>
          <br />
          <NavBarContainer />
          <br /><br /><br /><br />
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

export default withRouter(connect(null, { fetchCurrentUser })(App))
