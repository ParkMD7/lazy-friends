import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class NavBar extends Component {

  render() {
    const link = {
      width: '100px',
      padding: '12px',
      margin: '0 6px 6px',
      background: 'blue',
      textDecoration: 'none',
      color: 'white',
    }
    return (
      <div>
        <NavLink to='/' style={link}>Home</NavLink>
        <NavLink to='/profile' style={link}>Profile</NavLink>
        <NavLink to='/newgroup' style={link}>New Group</NavLink>
        <NavLink to='/users' style={link}>Users</NavLink>
      </div>
    );
  }

}

export default NavBar;
