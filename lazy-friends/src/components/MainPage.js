import React, { Component } from 'react';
import { connect } from 'react-redux';
import GroupContainer from './groups/GroupContainer'
import SuggestionContainer from './suggestions/SuggestionContainer'
import { Grid } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'
import MyMapComponent from './map/MyMapComponent'
import { selectGroup } from '../actions/currentGroup'
import { loginOrSignup, signout } from '../actions/currentUser'
import { updateCoordinates } from '../actions/currentCoords'
import { config } from './config'

class MainPage extends Component {
  handleMiddleCoords = (coordinates) => {
    this.props.updateCoordinates(coordinates)
  }

  handleGroupChange = (currentGroup) => {
    this.props.selectGroup(currentGroup)
  }

  displayMainPage = () => {
    return (
      <Grid container columns={3}>

        <Grid.Column className="ui container center aligned">
          <GroupContainer
            groups={this.props.currentUser.groups}
            coords={this.handleMiddleCoords}
            groupChange={this.handleGroupChange}
          />
        </Grid.Column>

        <Grid.Column className="ui container center aligned">
          <br />
          <h1>Google Map</h1>
          { this.props.currentGroup.name !== '' ?
            <MyMapComponent
              googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${config.apiKey}&v=3.exp&libraries=geometry,drawing,places`}
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `600px`, width: `100%` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          : null
          }
        </Grid.Column>

        <Grid.Column className="ui container center aligned">
          <br />
          <h1>Suggestions</h1>
          <SuggestionContainer
          />
        </Grid.Column>

      </Grid>
    )
  }

  render() {
    return (
        <div>
          { this.props.currentUser.username === '' ?
          <Redirect to='/login' /> : this.displayMainPage() }
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    currentGroup: state.currentGroup,
    currentCoords: state.currentCoords
  }
}

export default connect(mapStateToProps, { loginOrSignup, signout, selectGroup, updateCoordinates })(MainPage);
