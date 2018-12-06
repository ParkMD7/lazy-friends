// dependencies
import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

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
    this.props.history.push({
      pathname: '/'
    })
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
      return <Header key={group.id} onClick={() => this.handleGroupJoin(group)}> {group.name} </Header>
    })
  }

  render() {
    console.log(this.props)
    return (
      <Container fluid textAlign='center'>
        {this.groupsToDisplay(this.props.allGroups)}
      </Container>
    );
  }

}

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.currentUser.user,
    allGroups: state.groupsReducer.groups,
    userGroups: state.currentUser.userGroups
  }
}

export default withRouter(connect(mapStateToProps, { fetchGroups, joinGroup })(Groups));
