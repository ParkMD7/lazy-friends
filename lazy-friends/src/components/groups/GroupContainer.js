import React, { Component } from 'react';
import GroupList from './GroupList'
import { Container } from 'semantic-ui-react'
import { connect } from 'react-redux';

class GroupContainer extends Component {
  groupToDisplay = () => {
    return this.props.currentGroup
  }

  render(){
    return (
      <div className="ui container center aligned" style={{height: '645px'}}>
        <Container fluid>

          <GroupList
            group={ this.groupToDisplay() }
            coords={this.props.coords}
          />
        </Container>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    currentGroup: state.currentUser.currentGroup,
    currentUserGroups: state.currentUser.userGroups
  }
}

export default connect(mapStateToProps)(GroupContainer);
