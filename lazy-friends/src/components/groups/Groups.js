// dependencies
import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { connect } from 'react-redux';

// user files
import { fetchGroups } from '../../actions/fetchGroups'


class Groups extends Component {
  // state = {
  //   currentGroup: {},
  //   groups: []
  // }

  componentDidMount() {
    // fetch('http://localhost:3000/groups')
    // .then(res => res.json())
    // .then( groups => {
    //   this.setState({groups: groups.groups, currentGroup: groups[0]})
    // })
    this.props.fetchGroups()
    debugger
  }

  handleGroupJoin = group => {
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
    .then( groupObj => {
      const groups = this.state.groups.filter( group => group.id !== groupObj.id)
      this.setState({
        groups
      })
    })
  }

  groupsToDisplay = (groups) => {
    if(!groups){
      return <p>Loading Groups...</p>
    }
    const groupsWithoutCurrentUser = groups.filter(group => {
      const userGroups = group.users.filter(user => {
        debugger
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
    allGroups: state.groupsReducer.groups
  }
}

export default connect(mapStateToProps, { fetchGroups })(Groups);
