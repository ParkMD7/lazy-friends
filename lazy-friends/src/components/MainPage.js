import React, { Component } from 'react';
import GroupContainer from './groups/GroupContainer'
import { Grid } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'
import MyMapComponent from './map/MyMapComponent'

class MainPage extends Component {
  state = {
    coordinates: ''
  }


  handleMiddleCoords = (coordinates) => {
    //debugger
    this.setState({
      coordinates
    })
  }




  displayMainPage = () => {
    return (
      <Grid container columns={3}>

        <Grid.Column>
          <GroupContainer
            groups={this.props.currentUser.groups}
            coords={this.handleMiddleCoords}
          />
        </Grid.Column>

        <Grid.Column>
          <h1>Google Map</h1>
          <MyMapComponent
            mapCoords={this.state.coordinates}
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyAIYICLeEdYXE_PCKhve_JNFWbqrNL3OD0&v=3.exp&libraries=geometry,drawing,places`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `600px`, width: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </Grid.Column>

        <Grid.Column>
          <h1>Suggestions</h1>
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

export default MainPage;
