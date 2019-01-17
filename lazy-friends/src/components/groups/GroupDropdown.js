import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { selectGroup } from '../../actions/currentGroup'

class GroupDropdown extends Component {
  componentDidMount() {
    this.props.selectGroup(this.props.currentUserGroups[0])
  }

  handleGroupChange = (event, semanticStuff) => {
    const { currentUserGroups, selectGroup } = this.props 
    const selectedGroup = currentUserGroups.find( group => group.id === semanticStuff.value)
    selectGroup(selectedGroup)
  }

  formatGroupsForDropdown = () => {
    return this.props.currentUserGroups.map(group => ({text: group.name, value: group.id}))
  }

  render() {
    return (
      this.props.currentUserGroups.length === 0 ?
        <Dropdown style={{height: '10px', fontSize: '20px', color: 'black', backgroundColor: 'rgba(250, 208, 155, 0.8)'}} onChange={(event) => event.preventDefault()} text={'Please Join A Group To See The Middle Point'} fluid selection />
          :
        <Dropdown style={{height: '10px', fontSize: '20px', color: 'rgba(250, 208, 155)', backgroundColor: 'rgba(0, 0, 0, 0.8)'}} onChange={this.handleGroupChange} text={`Group Name: ${this.props.currentGroup.name}`} fluid selection options={this.formatGroupsForDropdown()}/>
    )
  } 
};

const mapStateToProps = (state) => {
  return {
    currentGroup: state.currentUser.currentGroup,
    currentUserGroups: state.currentUser.userGroups
  }
}


export default connect(mapStateToProps, { selectGroup })(GroupDropdown);
