import React, { Component } from 'react';
import GroupList from './GroupList'
import GroupDropdown from './GroupDropdown'
import {groups} from './group'
import { Container } from 'semantic-ui-react'

class GroupContainer extends Component {
  state = {
    currentGroup: {},
    groups: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/groups')
    .then(res => res.json())
    .then( groups => {
      this.setState({groups, currentGroup: groups[0]})
    })
  }

  groupToDisplay = () => {
    return this.state.currentGroup
  }

  handleGroupChange = (event, semanticStuff) => {
    const currentGroup = this.state.groups.find( group => group.id === semanticStuff.value)
    this.setState({currentGroup})
  }

  render(){
    return (
      <Container fluid>
        <GroupDropdown groups={this.state.groups} handleGroupChange={this.handleGroupChange} />
        <GroupList group={ this.groupToDisplay() } />
      </Container>
    )
  }

}

export default GroupContainer;
