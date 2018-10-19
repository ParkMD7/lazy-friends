import React from 'react';
import { Dropdown } from 'semantic-ui-react'

const GroupDropdown = ({groups, handleGroupChange}) => {
  if(groups === undefined){
    return null
  }

  function formatGroupsForDropdown(){
    return groups.map(group => ( {...group, text: group.name, value: group.id}))
  }

  return(
     <Dropdown onChange={handleGroupChange} placeholder={groups[0].name} fluid selection options={formatGroupsForDropdown()} />
   )
};

export default GroupDropdown;
