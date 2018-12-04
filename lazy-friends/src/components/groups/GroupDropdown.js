import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';

const GroupDropdown = ({currentUserGroups, handleGroupChange, currentGroup}) => {

  function formatGroupsForDropdown(){
    return currentUserGroups.map(group => ( {...group, text: group.name, value: group.id}))
  }

  if(currentUserGroups.length === 0){
    return null
  }

  return(
     <Dropdown onChange={handleGroupChange} text={currentGroup.name} fluid selection options={formatGroupsForDropdown()} />
   )
};

const mapStateToProps = (state) => {
  return {
    currentUserGroups: state.currentUser.userGroups
  }
}


export default connect(mapStateToProps)(GroupDropdown);
