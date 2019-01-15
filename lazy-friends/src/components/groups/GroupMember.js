import React, { Component } from 'react';
import { Card, Image, Grid, Segment } from 'semantic-ui-react'

class GroupMember extends Component {

  render() {
    return (
          <Card fluid centered style={{height:'175px', marginBottom: '15px', marginLeft: '25px', marginRight: '50px', backgroundColor: 'rgba(0, 0, 0, 0.8)', color: 'rgba(250, 208, 155)' }}>
            <Grid columns={2} divided>
              <Grid.Row stretched>
                <Grid.Column>
                  <Segment basic>
                    <Image centered src={this.props.profile_url} alt="oh no!" style={{height: '150px', width: '125px' }}/>
                  </Segment>
                </Grid.Column>


                <Grid.Column>
                  <Segment basic textAlign='center' floated='left'>
                    <Card.Header style={{fontSize: '20px', marginTop: '10px'}}>{this.props.name}</Card.Header>
                  </Segment>
                  <Segment basic textAlign='center' floated='left'>
                    <Card.Content style={{fontSize: '17px'}}>
                      <Card.Meta style={{color: 'white'}}>{this.props.location}</Card.Meta>
                    </Card.Content>
                  </Segment>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Card>
    );
  }

}

export default GroupMember;
