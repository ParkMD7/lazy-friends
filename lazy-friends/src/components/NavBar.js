// dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Menu, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux'

// user files
import { signout } from '../actions/currentUser'


class NavBar extends Component {

  handleSignOut = () => this.props.signout()

  render(){
    if(!this.props.user){
      return (
        <Menu inverted fluid size='massive' borderless style={{width: '350px', backgroundColor: 'rgba(0, 0, 0, 0)'}}>
          <Dropdown item text='Navigation Menu' style={{width: '200px', color: 'rgba(250, 208, 155)', 'fontFamily':'Montserrat'}}>
            <Dropdown.Menu inverted>

              <Dropdown.Item as={ Link } name='login' to='/login'>
                <Icon name='signup' circular fitted color='red' size='large' aria-label='about'/>
                Log In
              </Dropdown.Item>

              <Dropdown.Item as={ Link } name='signup' to='/signup'>
                <Icon name='signup' circular fitted color='red' size='large' aria-label='about'/>
                Sign Up
              </Dropdown.Item>

            </Dropdown.Menu>
          </Dropdown>
        </Menu>
      )
    }

    return(
      <Menu inverted size='massive' borderless style={{width: '350px', backgroundColor: 'rgba(0, 0, 0, 0)'}}>
        <Dropdown item text='Navigation Menu' style={{width: '200px', color: 'rgba(250, 208, 155)', 'fontFamily':'Montserrat'}}>
          <Dropdown.Menu>
            <Dropdown.Item as={ Link } name='home' to='/'>
              <Icon name='home' circular fitted color='red' size='large' aria-label='home'/>
              Home
            </Dropdown.Item>

            <Dropdown.Item as={ Link } name='profile' to='/profile'>
              <Icon name='user' circular fitted color='red' size='large' aria-label='profile'/>
              Profile
            </Dropdown.Item>

            <Dropdown.Item as={ Link } name='newgroup' to='/newgroup'>
              <Icon name='add' circular fitted color='red' size='large' aria-label='newgroup'/>
              New Group
            </Dropdown.Item>

            <Dropdown.Item as={ Link } name='about' to='/groups'>
              <Icon name='group' circular fitted color='red' size='large' aria-label='groups'/>
              Groups
            </Dropdown.Item>

            <Dropdown.Item as={ Link } name='signout' onClick={this.handleSignOut} to='/login'>
              <Icon name='sign out' circular fitted color='red' size='large' aria-label='sign out'/>
              Sign Out
            </Dropdown.Item>

          </Dropdown.Menu>
        </Dropdown>
      </Menu>
      )
  }

}



const mapStateToProps = (state) => ({
  user: state.currentUser.user
})

export default connect(mapStateToProps, { signout } )(NavBar);
