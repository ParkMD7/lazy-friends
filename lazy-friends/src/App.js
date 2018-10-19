import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import MainPage from './components/MainPage'
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Route exact path="/" component={MainPage} />
          <Route exact path='/profile' render={ () => <h1>Profile</h1>} />
          <Route exact path='/newgroup' render={ () => <h1>New Group</h1>} />
          <Route exact path='/users' render={ () => <h1>Users</h1>} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
