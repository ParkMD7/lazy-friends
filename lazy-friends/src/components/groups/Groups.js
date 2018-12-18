// dependencies
import React, { Component } from 'react';
import { Container, Header, Card, Feed, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// user files
import { fetchGroups } from '../../actions/fetchGroups'
import { joinGroup } from '../../actions/joinGroup'


class Groups extends Component {

  componentDidMount() {
    this.props.fetchGroups()
  }

  handleGroupJoin = (group) => {
    const userID = this.props.currentUser.id.toString()
    this.props.joinGroup(userID, group)
    this.props.history.push({
      pathname: '/'
    })
  }

  groupsToDisplay = (groups) => {
    if(!groups){
      return <p>Loading Groups...</p>
    }

    const groupsWithoutCurrentUser = groups.filter(group => {
      const userGroups = group.users.filter(user => {
        return user.id !== this.props.currentUser.id
      })
      if(userGroups.length === group.users.length){
        return userGroups
      }
    })

    return groupsWithoutCurrentUser.map( group => {
      // debugger
      // return <Header key={group.id} onClick={() => this.handleGroupJoin(group)}> {group.name} </Header>
      return(
        <Card centered style={{width:'400px', opacity:'0.9'}}>
          <Card.Content>
            <Header>Name: {group.name}</Header>
            <Feed.Date content=<span>Updated: {group.updated_at.toString()}</span> />
          </Card.Content>
          <Card.Content>
            <h5>Current Members:</h5>
            <div style={{overflowY: 'scroll', height: '75px'}}>
              {group.users.map(user => {
                return(
                  <Feed key={user.id}>
                    <Feed.Event>
                      <Feed.Label image={user.profile_url} />
                      <Feed.Content>
                        <Feed.Summary>
                          <a>{user.name}</a> joined <a>{group.name}</a>
                        </Feed.Summary>
                      </Feed.Content>
                    </Feed.Event>
                  </Feed>
                )
              })}
            </div>
          </Card.Content>
          <Card.Content extra>
            <Button fluid basic color='green' onClick={() => this.handleGroupJoin(group)}>
              Join Group
            </Button>
          </Card.Content>
        </Card>
      )
    })
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <br/>
        <Container centered className="ui container center aligned"><h1 style={{color: 'white'}}>Groups To Join:</h1></Container>
        <br/>
        <Container centered className="ui container center aligned" style={{overflowY: 'scroll', height: '600px'}}>
          <Card.Group centered itemsPerRow={2}>
            {this.groupsToDisplay(this.props.allGroups)}
          </Card.Group>
        </Container>
      </div>
    );
  }

}

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.currentUser.user,
    allGroups: state.groupsReducer.groups,
    userGroups: state.currentUser.userGroups
  }
}

export default withRouter(connect(mapStateToProps, { fetchGroups, joinGroup })(Groups));
