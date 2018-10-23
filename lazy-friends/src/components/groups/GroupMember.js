import React, { Component } from 'react';
import { Card } from 'semantic-ui-react'

class GroupMember extends Component {

  render() {
    return (
      <div className="ui container center aligned">
        <Card fluid>
          <div width='100%'>
            <h2>{this.props.name}</h2>
            <div className="image">
              <img src={this.props.profile_url} alt="oh no!" height='125px' width='125px'/>
            </div>
            <h5>{this.props.location}</h5>
          </div>
        </Card>
      </div>
    );
  }

}

export default GroupMember;
