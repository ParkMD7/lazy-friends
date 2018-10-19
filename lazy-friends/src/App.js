import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
<<<<<<< HEAD
// import NewNavBar from './components/NewNavBar'
=======
>>>>>>> d710e30c77c6978bb60413029662ebd9211a22da
import MainPage from './components/MainPage'
import NewGroupForm from './components/groups/NewGroupForm'
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
        <br />
          <div>
            <NavBar />
          </div>
          <br /><br />
          <Route exact path="/" component={MainPage} />
          <Route exact path='/profile' render={ () => <h1>Profile</h1>} />
          <Route exact path='/newgroup' component={NewGroupForm} />
          <Route exact path='/users' render={ () => <h1>Users</h1>} />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
