import React from 'react'
import GroupMember from './GroupMember'
import { connect } from 'react-redux';
import { Card } from 'semantic-ui-react'

class GroupList extends React.Component {

  render() {
    if(JSON.stringify(this.props.selectedGroup) === JSON.stringify({}) || this.props.selectedGroup === undefined){
      return null
    }

    return (
        <div className="ui container center aligned" style={{height: '550px'}}>
          <div>
            {this.props.selectedGroup.users.map(groupUser => <GroupMember key={groupUser.id} {...groupUser} />)}
          </div>
        </div>
    );
  }
}

// const mapStateToProps = (state, ownProps) => {
//   return {
//     currentGroup: state.currentUser.currentGroup,
//     selectedGroup: state.groupsReducer[ownProps.match.params.id]
//   }
// }

// export default connect(mapStateToProps)(GroupList);
export default GroupList;
