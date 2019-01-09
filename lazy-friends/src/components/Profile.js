// dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';


class Profile extends Component {


  render() {
    return (
      <div>
        <h1>Profile Page</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser.user,
    currentGroup: state.currentUser.currentGroup,
    currentCoords: state.currentCoords,
    currentUserGroups: state.currentUser.userGroups
  }
}

export default connect(mapStateToProps)(Profile);
