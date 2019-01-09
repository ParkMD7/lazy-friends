// dependencies
import React, { Component } from 'react';
import { Container, Header, Card, Feed, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import _ from 'lodash';

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

  groupsToDisplay = () => {
    // since I turned the fetched API into an object in reducers/goalsReducer I am now using lodash to map over that object
    return _.map(this.props.allGroups, group => {

      let usersAlreadyJoinedGroup = this.props.userGroups.find( userGroup => {
        return userGroup.id === group.id
        })
      debugger
      return !usersAlreadyJoinedGroup ?
        (
          <Card centered style={{width:'400px', opacity:'0.9'}}>
            <Card.Content>
              <Link to={`/groups/${group.id}`}>
                <Header>Name: {group.name}</Header>
                <Feed.Date content=<span>Updated: {group.updated_at.toString().split('T')[0]}</span> />
              </Link>
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
        :
        null
      })
  }

  render() {
    if(!this.props.allGroups){
      return <h1>Loading Groups</h1>
    }
    console.log('%c GGroups Page Props: ', 'color: green', this.props.allGroups, this.props.currentUser);
    return (
      <div>
        <br/>
        <Container centered className="ui container center aligned"><h1 style={{color: 'white'}}>Groups To Join:</h1></Container>
        <br/>
        <Container centered className="ui container center aligned" style={{overflowY: 'scroll', height: '600px'}}>
          <Card.Group centered itemsPerRow={2}>
            {this.groupsToDisplay()}
          </Card.Group>
        </Container>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser.user,
    allGroups: state.groupsReducer.groups,
    userGroups: state.currentUser.userGroups
  }
}

export default withRouter(connect(mapStateToProps, { fetchGroups, joinGroup })(Groups));
