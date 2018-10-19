import React from 'react';
import { Dropdown } from 'semantic-ui-react'

const GroupDropdown = ({groups, handleGroupChange}) => {
  function formatGroupsForDropdown(){
    return groups.map(group => ( {...group, text: group.name, value: group.id}))
  }

  if(groups.length === 0){
    return null
  }

  return(
     <Dropdown onChange={handleGroupChange} text={groups[0].name} fluid selection options={formatGroupsForDropdown()} />
   )
};

export default GroupDropdown;
