import React, { Component } from 'react';
import GroupContainer from './groups/GroupContainer'
import MapComponent from './map/MapComponent'
import { config } from '../config.js'
import { Grid } from 'semantic-ui-react'
import { BrowserRouter, Redirect, Route } from 'react-router-dom'
import Login from './forms/Login'




class MainPage extends Component {
  state = {
    suggestions: [],
    coordinates: {}
  }

  componentDidMount(){
    const googleMapsClient = require('@google/maps').createClient({
      key: config.APIKEY,
      Promise: Promise
    }, ()=> {
      console.log(config.APIKEY)
      console.log(googleMapsClient)
    });

    googleMapsClient.geocode({address: '111 East 75th Street, New York, NY'})
      .asPromise()
      .then((response) => {
        console.log('from inside component', response.json.results);
        // this.setState({
        //   coordinates: response.json.results.geometry.location
        // }, () => console.log(this.state));
      })
      .catch((err) => {
        console.log(err);
      });
  }



  render() {
    // console.log(this.state.coordinates);
  displayMainPage = () => {
    return (
      <Grid container columns={3}>

        <Grid.Column>
          <h1>Groups</h1>
          {/* <GroupContainer /> */}
        </Grid.Column>

        <Grid.Column>
          <MapComponent />
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
