import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { selectGroup } from '../../actions/currentGroup'

const GroupDropdown = ({currentUserGroups, selectGroup, currentGroup}) => {

  const handleGroupChange = (event, semanticStuff) => {
    const selectedGroup = currentUserGroups.find( group => group.id === semanticStuff.value)
    selectGroup(selectedGroup)
  }

  const formatGroupsForDropdown = () => {
    return currentUserGroups.map(group => ( {...group, text: group.name, value: group.id}))
  }

  if(currentUserGroups.length === 0){
    return <Dropdown onChange={(event) => event.preventDefault()} text={'Please Join A Group To See The Middle Point'} fluid selection />
  }

  return(
     <Dropdown onChange={handleGroupChange} text={currentGroup.name} fluid selection options={formatGroupsForDropdown()} />
   )
};

const mapStateToProps = (state) => {
  return {
    currentGroup: state.currentUser.currentGroup,
    currentUserGroups: state.currentUser.userGroups
  }
}


export default connect(mapStateToProps, { selectGroup })(GroupDropdown);
