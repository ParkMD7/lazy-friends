// dependencies
import React, { Component } from 'react';
import { Menu, Grid, Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// user files
import NavBar from './NavBar'

class NavBarContainer extends Component {
  render(){
    return(
      <Menu size='massive' widths={3} fixed='top' fluid style={{height: '75px', backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
        <Menu.Item position='left'>
          <Link to='/profile'>
            <h2><span style={{color: 'rgba(250, 208, 155)'}}>{ !!this.props.loggedIn ? `${this.props.user.name}: (${this.props.userGroups.length} Groups)` : ' ' }</span></h2>
          </Link>
        </Menu.Item>

        <Menu.Item>
          <Link to='/'>
            <h1 style={{'fontSize': '50px'}}><span style={{color: 'rgba(250, 208, 155)'}}>Lazy Friends</span></h1>
          </Link>
        </Menu.Item>

        <Menu.Item position='right'>
          <NavBar />
        </Menu.Item>
      </Menu>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.currentUser.user,
  loggedIn: state.currentUser.loggedIn,
  userGroups: state.currentUser.userGroups
})

export default connect(mapStateToProps)(NavBarContainer);
