import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const MyMapComponent = withScriptjs(withGoogleMap((props) => {
  console.log(props);

    const splitCoords = props.mapCoords.split(',')
   return(
      <div className="ui container center aligned">
        <GoogleMap
          id="mapMyGuy"
          defaultCenter = { { lat: parseFloat(splitCoords[0]), lng: parseFloat(splitCoords[1]) } }
          defaultZoom = { 15 }
        />
        <Marker
          position={ { lat: parseFloat(splitCoords[0]), lng: parseFloat(splitCoords[1]) } }
        />
      </div>
   );
}));
export default MyMapComponent;
