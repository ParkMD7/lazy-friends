// dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Card, Icon, Image, Button, Grid, Feed, Header } from 'semantic-ui-react';

// user files
import { fetchGroup } from '../../actions/fetchGroup'
import { joinGroup } from '../../actions/joinGroup'
import { selectGroup } from '../../actions/currentGroup'
import GroupContainer from './GroupContainer'

class GroupShowPage extends Component {

  componentDidMount() {
    const groupID = this.props.match.params.id // this params object will contain all wildcard tokens in our url route -> I am pulling off the id
    this.props.fetchGroup(groupID);
    this.selectGroup()
  }

  selectGroup = () => {
    const selectedGroup = this.props.currentUserGroups.find( group => group.id == this.props.match.params.id )
    this.props.selectGroup(selectedGroup)
  }

  handleGroupJoin = (group) => {
    const userID = this.props.user.id.toString()
    this.props.joinGroup(userID, group)
    this.props.history.push({
      pathname: '/'
    })
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
              <Grid.Column width={6} textAlign='center'>
                <h2 style={{color:'white'}}>Group Info</h2>
                <Card centered style={{width:'400px', opacity:'0.9'}}>
                  <Card.Content>
                    <Header>Name: {this.props.group.name}</Header>
                    <Feed.Date content=<span>Updated: {this.props.group.updated_at.toString().split('T')[0]}</span> />
                  </Card.Content>
                  <Card.Content extra>
                    <Button fluid basic color='green' onClick={() => this.handleGroupJoin(this.props.group)}>
                      Join Group
                    </Button>
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column width={6} textAlign='center'>
                <Header style={{color: 'white'}}>Group Members</Header>
                <GroupContainer />
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
  user: currentUser.user,
  currentUserGroups: currentUser.userGroups
})

export default withRouter(connect(mapStateToProps, { fetchGroup, joinGroup, selectGroup })(GroupShowPage));
