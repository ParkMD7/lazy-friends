// dependencies
import React, { Component } from 'react';
import { Menu, Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// user files
import NavBar from './NavBar'

class NavBarContainer extends Component {

  render(){
    if(!this.props.loggedIn){
      return (
        <Menu size='massive' fixed='top' fluid style={{height: '95px'}}>
          <Menu.Item>
            <Link to='/'>
              <h1 style={{'fontSize': '50px'}}>LAZY<span style={{color: 'blue'}}>friends</span></h1>
            </Link>
          </Menu.Item>
          <Menu.Item >
            <NavBar />
          </Menu.Item>
        </Menu>
      )
    }

    return(
      <Menu size='massive' fixed='top' fluid style={{height: '95px'}}>
        <Menu.Item>
          <Link to='/'>
            <h1 style={{'fontSize': '50px'}}>LAZY<span style={{color: 'blue'}}>friends</span></h1>
          </Link>
        </Menu.Item>
        <Menu.Item >
          <NavBar />
        </Menu.Item>
      </Menu>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.currentUser.user,
  loggedIn: state.currentUser.loggedIn
})

export default connect(mapStateToProps)(NavBarContainer);
