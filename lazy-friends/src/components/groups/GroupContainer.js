import React, { Component } from 'react';
import GroupList from './GroupList'
import GroupDropdown from './GroupDropdown'
import { Container } from 'semantic-ui-react'
import { connect } from 'react-redux';

class GroupContainer extends Component {

  render(){
    return (
      <div className="ui container center aligned" style={{height: '645px'}}>
        <Container fluid textAlign='centered'>
          <GroupList />
        </Container>
      </div>
    )
  }

}

export default GroupContainer;
