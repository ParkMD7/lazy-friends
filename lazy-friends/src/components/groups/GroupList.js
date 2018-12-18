import React from 'react'
import GroupMember from './GroupMember'
import { connect } from 'react-redux';
import { Card } from 'semantic-ui-react'

class GroupList extends React.Component {

  render() {
    if(JSON.stringify(this.props.currentGroup) === JSON.stringify({}) || this.props.currentGroup === undefined){
      return null
    }

    return (
      <div className="ui container center aligned" style={{overflowY: 'scroll', height: '550px'}}>
        <div>
          {this.props.currentGroup.users.map(groupUser => <GroupMember key={groupUser.id} {...groupUser} />)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentGroup: state.currentUser.currentGroup
  }
}

export default connect(mapStateToProps)(GroupList);
