import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';

const MyMapComponent = withScriptjs(withGoogleMap((props) => {

    const splitCoords = props.mapCoords.split(', ')
   return(
      <div>
        <GoogleMap
          defaultCenter = { { lat: parseFloat(splitCoords[0]), lng: parseFloat(splitCoords[1]) } }
          defaultZoom = { 15 }
        />
      </div>
   );
}));
export default MyMapComponent;
