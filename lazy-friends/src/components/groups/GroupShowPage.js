// dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Card, Icon, Image, Button, Grid, Feed, Header } from 'semantic-ui-react';

// user files
import { fetchGroup } from '../../actions/fetchGroup'
import { joinGroup } from '../../actions/joinGroup'


class GroupShowPage extends Component {

  componentDidMount() {
    const groupID = this.props.match.params.id // this params object will contain all wildcard tokens in our url route -> I am pulling off the id
    this.props.fetchGroup(groupID);
  }


  render(){
    console.log('%c GroupShow Props: ', 'color: yellow', this.props);
    debugger

    if(!this.props.group){
      return(
        <div>
          <br />
          Loading...
          <br /><br />
          <Link to='/'>
            <Button size='massive' negative>Back To Home Page</Button>
          </Link>
        </div>
      )
    }

    return (
        <div className="ui container center aligned" >
          <Grid divided='vertically' centered style={{border:'none'}}>
            <Grid.Row columns={1} centered>
              <Grid.Column width={8} textAlign='center'>
                <br />
                <Link to='/'>
                  <Button size='massive' color='black'>Back To Home Page</Button>
                </Link>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={1} centered>
              <Grid.Column width={6} textAlign='center' centered>
                <h2>Group Info</h2>
                <Card centered style={{width:'400px', opacity:'0.9'}}>
                  <Card.Content>
                    <Header>Name: {this.props.group.name}</Header>
                    <Feed.Date content=<span>Updated: {this.props.group.updated_at.toString().split('T')[0]}</span> />
                  </Card.Content>
                  <Card.Content>
                    <h5>Current Members:</h5>
                    <div style={{overflowY: 'scroll', height: '75px'}}>
                      {this.props.group.users.map(user => {
                        return(
                          <Feed key={user.id}>
                            <Feed.Event>
                              <Feed.Label image={user.profile_url} />
                              <Feed.Content>
                                <Feed.Summary>
                                  <a>{user.name}</a> joined <a>{this.props.group.name}</a>
                                </Feed.Summary>
                              </Feed.Content>
                            </Feed.Event>
                          </Feed>
                        )
                      })}
                    </div>
                  </Card.Content>
                  <Card.Content extra>
                    <Button fluid basic color='green' onClick={() => this.handleGroupJoin(this.props.group)}>
                      Join Group
                    </Button>
                  </Card.Content>
                </Card>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      );
    }
}


const mapStateToProps = ({ currentUser, groupsReducer }, ownProps) => ({
  // this GroupShowPage component will now only recieve the 1 that a user clicks on
  group: groupsReducer[ownProps.match.params.id],
  user: currentUser.user
})

export default withRouter(connect(mapStateToProps, { fetchGroup, joinGroup })(GroupShowPage));
