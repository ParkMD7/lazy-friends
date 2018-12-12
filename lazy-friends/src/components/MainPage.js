import React, { Component } from 'react';
import { connect } from 'react-redux';
import GroupContainer from './groups/GroupContainer'
import SuggestionContainer from './suggestions/SuggestionContainer'
import { Grid } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'
import MyMapComponent from './map/MyMapComponent'
import { selectGroup } from '../actions/currentGroup'
import { loginOrSignup, signout } from '../actions/currentUser'
import { fetchCurrentUser } from '../actions/loginUser'
import { updateCoordinates } from '../actions/currentCoords'
import { config } from './config'

class MainPage extends Component {


  handleMiddleCoords = (coordinates) => {
    this.props.updateCoordinates(coordinates)
  }

  findMiddleCoords = () => {
    let totalLat = 0
    let totalLng = 0
    let middleCoords = ''
    if(this.props.currentGroup.users){
      if(this.props.currentGroup.users.length !== 0){
        this.props.currentGroup.users.forEach( user => {
          const userLat = parseFloat(user.coordinates.split(',')[0])
          const userLng = parseFloat(user.coordinates.split(',')[1])
          totalLat += userLat
          totalLng += userLng
        })
        const middleLat = (totalLat / this.props.currentGroup.users.length).toFixed(6)
        const middleLng = (totalLng / this.props.currentGroup.users.length).toFixed(6)
        middleCoords = `${middleLat},${middleLng}`
        console.log(middleCoords);
        // this.props.coords(middleCoords)
        if(this.props.currentCoords !== middleCoords ){
          this.props.updateCoordinates(middleCoords)
        }
      }
    }
  }

  displayMainPage = () => {
    return (
      <Grid container columns={3}>

        <Grid.Column className="ui container center aligned">
          <GroupContainer />
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
          <SuggestionContainer />
        </Grid.Column>

      </Grid>
    )
  }

  render() {
    this.findMiddleCoords()
    return (
        <div>
          { !this.props.currentUser ?
          <Redirect to='/login' /> : this.displayMainPage() }
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser.user,
    currentGroup: state.currentUser.currentGroup,
    currentCoords: state.currentCoords,
    currentUserGroups: state.currentUser.userGroups
  }
}

export default connect(mapStateToProps, { loginOrSignup, signout, selectGroup, updateCoordinates, fetchCurrentUser })(MainPage);
