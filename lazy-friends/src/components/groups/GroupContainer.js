import React, { Component } from 'react';
import GroupList from './GroupList'
import GroupDropdown from './GroupDropdown'
// import {groups} from './group'
import { Container } from 'semantic-ui-react'
import { selectGroup } from '../../actions/currentGroup'
import { connect } from 'react-redux';

class GroupContainer extends Component {
  groupToDisplay = () => {
    return this.props.currentGroup
  }

  handleGroupChange = (event, semanticStuff) => {
    const currentGroup = this.props.currentUserGroups.find( group => group.id === semanticStuff.value)
    this.props.groupChange(currentGroup)
  }

  render(){
    return (
      <div className="ui container center aligned" style={{height: '645px'}}>
        <Container fluid>
          <GroupDropdown
            // groups={this.props.currentUserGroups}
            handleGroupChange={this.handleGroupChange}
            currentGroup={this.props.currentGroup}
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

const mapStateToProps = (state) => {
  return {
    currentGroup: state.currentGroup,
    currentUserGroups: state.currentUser.userGroups
  }
}

export default connect(mapStateToProps, { selectGroup })(GroupContainer);
