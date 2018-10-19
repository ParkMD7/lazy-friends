import React, { Component } from 'react';

class GroupMember extends Component {

  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
      </div>
    );
  }

}

export default GroupMember;
