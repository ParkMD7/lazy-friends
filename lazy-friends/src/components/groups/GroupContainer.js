import React, { Component } from 'react';
import GroupList from './GroupList'
import GroupDropdown from './GroupDropdown'
// import {groups} from './group'
import { Container } from 'semantic-ui-react'

class GroupContainer extends Component {

  state = {
    currentGroup: {}
    // groups: []
  }

  componentDidMount() {
    this.setState({
      currentGroup: this.props.groups[0]
    })
  }

  groupToDisplay = () => {
    return this.state.currentGroup
  }

  handleGroupChange = (event, semanticStuff) => {
    const currentGroup = this.props.groups.find( group => group.id === semanticStuff.value)
    this.setState({currentGroup})
  }

  render(){
    return (
      <div className="ui container center aligned">
        <Container fluid>
          <GroupDropdown
            groups={this.props.groups}
            handleGroupChange={this.handleGroupChange}
            currentGroup={this.state.currentGroup}
          />

          <GroupList
            group={ this.groupToDisplay() }
            coords={this.props.coords}
          />
        </Container>
      </div>
    )
  }

}

export default GroupContainer;
