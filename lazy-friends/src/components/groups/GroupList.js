import React from 'react'
import GroupMember from './GroupMember'

const GroupList = ({ group }) => {
  if(group === JSON.stringify({})){
    return null
  }
  
  return (
    <div>
      <div>
        <h1>{group.name}</h1>
        {group.users.map(groupUser => <GroupMember key={groupUser.id} {...groupUser} />)}
      </div>
      <div>
        {/* add in form to add a time */}
        <button>Meet Up</button>
      </div>
    </div>
  );
}

export default GroupList;
