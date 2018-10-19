import React from 'react';
import { Dropdown } from 'semantic-ui-react'

const GroupDropdown = ({groups, handleGroupChange, currentGroup}) => {
  function formatGroupsForDropdown(){
    return groups.map(group => ( {...group, text: group.name, value: group.id}))
  }

  if(groups.length === 0){
    return null
  }

  return(
     <Dropdown onChange={handleGroupChange} text={currentGroup.name} fluid selection options={formatGroupsForDropdown()} />
   )
};

export default GroupDropdown;
