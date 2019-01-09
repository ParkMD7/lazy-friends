// dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Header, Card, Button, Confirm, Image, Grid, Statistic, Icon } from 'semantic-ui-react';
import _ from 'lodash'


class Profile extends Component {

  formatName = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  displayUsersGroups = () => {
    return this.props.currentUserGroups.map( group => {
      return (
        <Card centered height='auto' width='auto' raised>
          <Card.Content>
            <Link to={`/groups/${group.id}`}>
              <Header>Name: {group.name}</Header>
            </Link>
          </Card.Content>
          <Card.Content extra>
            <Button fluid basic color='red' onClick={() => this.handleLeaveGroup(group)}>
              Leave Group
            </Button>
          </Card.Content>
        </Card>
      )
    })
  }

  render() {
    return (
      <Grid>
        <Grid.Row centered>
          <h1>{this.formatName(this.props.currentUser.name)}'s Profile Page</h1>
        </Grid.Row>

        <Grid.Row columns={2} divided='vertically' centered>
          <Grid.Column width={8} textAlign='center'>
            <Card centered height='auto' width='auto' style={{width:'400px', height:'525px', 'background-color': 'black'}} raised>
              <h2 style={{color:'white', 'fontFamily':'Montserrat'}}>{this.formatName(this.props.currentUser.username)}</h2>
              <Image centered src={this.props.currentUser.profile_url} alt="Loading Picture" style={{width:'300px', height:'250px'}}/>
              <Card.Content>
                <br />
                <Card.Meta style={{color:'white', 'fontFamily':'Raleway'}}>Location: {this.props.currentUser.location}</Card.Meta>
                <Card.Meta style={{color:'white', 'fontFamily':'Raleway'}}>Coordinates: {this.props.currentUser.coordinates}</Card.Meta>
                <br />
                <Button color='grey' fluid style={{'fontFamily':'Raleway'}}>
                  <Icon name='edit' />
                  Edit Profile
                </Button>
                <Button color='red' fluid style={{'fontFamily':'Raleway'}}>
                  <Icon name='delete' />
                  Delete Profile
                </Button>
              </Card.Content>
            </Card>
          </Grid.Column>

          <Grid.Column width={8} textAlign='center' style={{overflowY: 'scroll', width:'400px', height:'525px', 'background-color': 'black'}}>
            {this.displayUsersGroups()}
          </Grid.Column>
        </Grid.Row>
      </Grid>
      )
    }
  }

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser.user,
    currentUserGroups: state.currentUser.userGroups
  }
}

export default connect(mapStateToProps)(Profile);
