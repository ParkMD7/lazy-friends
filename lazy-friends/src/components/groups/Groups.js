import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'

class Groups extends Component {
  state = {
    currentGroup: {},
    groups: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/groups')
    .then(res => res.json())
    .then( groups => {
      this.setState({groups: groups.groups, currentGroup: groups[0]})
    })
  }

  handleGroupJoin = group => {
    // console.log(group)
    // console.log(this.props.currentUser)
    fetch(`http://localhost:3000/groups/${group.id}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: this.props.currentUser.id
      })
    }).then(res => res.json())
    .then( updatedGroup => {
      console.log(updatedGroup)
    })
  }

  groupsToDisplay = groups => {
    if(groups.length === 0){
      return null
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
        {this.groupsToDisplay(this.state.groups)}
      </Container>
    );
  }

}

export default Groups;
