import React, { Component } from 'react';
import { Card } from 'semantic-ui-react'

class GroupMember extends Component {

  render() {
    return (
        <Card fluid textAlign='center' height='200px' width='150px'>
          <div>
            <h3>Name: {this.props.name}</h3>
            <div className="image">
              <img src={this.props.profile_url} alt="oh no!" height='100px' width='100px'/>
            </div>
            <h5>Location: {this.props.location}</h5>
          </div>
        </Card>
    );
  }

}

export default GroupMember;
