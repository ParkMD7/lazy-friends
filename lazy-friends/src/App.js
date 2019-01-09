// dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom'

// user files
import NavBarContainer from './components/NavBarContainer'
import MainPage from './components/MainPage'
import Profile from './components/Profile'
import NewGroupForm from './components/groups/NewGroupForm'
import Login from './components/forms/Login'
import SignUp from './components/forms/SignUp'
import Groups from './components/groups/Groups'
import GroupShowPage from './components/groups/GroupShowPage'
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
            <Route exact path='/profile' component={ () => <Profile /> } />
            <Route exact path='/newgroup' component={NewGroupForm} />
            <Route exact path='/groups' component={ () => <Groups />} />
            <Route exact path='/groups/:id' component={ () => <GroupShowPage /> } />
            <Route exact path='/signup' component={ () => <SignUp /> } />
            <Route exact path='/login' component={ () => <Login /> } />
          </Switch>
        </React.Fragment>
    );
  }
}

export default withRouter(connect(null, { fetchCurrentUser })(App))
