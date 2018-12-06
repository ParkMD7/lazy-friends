import React, { Component } from 'react';
import {connect} from 'react-redux'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const MyMapComponent = withScriptjs(withGoogleMap((props) => {
  console.log(props);
    const splitCoords = props.currentCoords.split(',')
     return(
        <div className="ui container center aligned">
          <GoogleMap
            id="mapMyGuy"
            center = { { lat: parseFloat(splitCoords[0]), lng: parseFloat(splitCoords[1]) } }
            defaultZoom = { 15 }
          />
          <Marker
            position={ { lat: parseFloat(splitCoords[0]), lng: parseFloat(splitCoords[1]) } }
          />
        </div>
     )

}));

const mapStateToProps = (state) => {
  return {
    currentCoords: state.currentCoords
  }
}

export default connect(mapStateToProps)(MyMapComponent);
