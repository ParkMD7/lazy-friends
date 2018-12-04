// dependencies
import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { connect } from 'react-redux';

// user files
import { fetchGroups } from '../../actions/fetchGroups'
import { joinGroup } from '../../actions/joinGroup'


class Groups extends Component {

  componentDidMount() {
    this.props.fetchGroups()
  }

  handleGroupJoin = (group) => {
    const userID = this.props.currentUser.id.toString()
    this.props.joinGroup(userID, group)
  }

  groupsToDisplay = (groups) => {
    if(!groups){
      return <p>Loading Groups...</p>
    }
    const groupsWithoutCurrentUser = groups.filter(group => {
      const userGroups = group.users.filter(user => {
        return user.id !== this.props.currentUser.id
      })
      if(userGroups.length === group.users.length){
        return userGroups
      }
    })

    return groupsWithoutCurrentUser.map( group => {
      return <p key={group.id} onClick={() => this.handleGroupJoin(group)}> {group.name} </p>
    })
  }

  render() {
    return (
      <Container fluid textAlign='center'>
        {this.groupsToDisplay(this.props.allGroups)}
      </Container>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser.user,
    allGroups: state.groupsReducer.groups,
    userGroups: state.currentUser.userGroups
  }
}

export default connect(mapStateToProps, { fetchGroups, joinGroup })(Groups);
