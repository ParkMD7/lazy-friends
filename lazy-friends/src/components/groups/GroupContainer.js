import React, { Component } from 'react';
import GroupList from './GroupList'
import { Container } from 'semantic-ui-react'

class GroupContainer extends Component {
  render(){
    return (
      <div className="ui container center aligned" style={{height: '550px'}}>
        <Container fluid>
          <GroupList selectedGroup={this.props.selectedGroup} />
        </Container>
      </div>
    )
  }

}

export default GroupContainer;
