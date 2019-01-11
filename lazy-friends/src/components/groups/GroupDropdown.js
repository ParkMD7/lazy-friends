import React from 'react';
import { Dropdown, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { selectGroup } from '../../actions/currentGroup'

const GroupDropdown = ({currentUserGroups, selectGroup, currentGroup}) => {

  const handleGroupChange = (event, semanticStuff) => {
    const selectedGroup = currentUserGroups.find( group => group.id === semanticStuff.value)
    selectGroup(selectedGroup)
  }

  const formatGroupsForDropdown = () => {
    return currentUserGroups.map(group => ({text: group.name, value: group.id}))
  }

  return currentUserGroups.length === 0 ?
    <Dropdown style={{height: '10px', fontSize: '20px', color: 'black', backgroundColor: 'rgba(250, 208, 155, 0.8)'}} onChange={(event) => event.preventDefault()} text={'Please Join A Group To See The Middle Point'} fluid selection />
      :
    <Dropdown style={{height: '10px', fontSize: '20px', color: 'rgba(250, 208, 155)', backgroundColor: 'rgba(0, 0, 0, 0.8)'}} onChange={handleGroupChange} text={`Group Name: ${currentGroup.name}`} fluid selection options={formatGroupsForDropdown()}/>
};

const mapStateToProps = (state) => {
  return {
    currentGroup: state.currentUser.currentGroup,
    currentUserGroups: state.currentUser.userGroups
  }
}


export default connect(mapStateToProps, { selectGroup })(GroupDropdown);
