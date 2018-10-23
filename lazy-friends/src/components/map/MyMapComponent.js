import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';

const MyMapComponent = withScriptjs(withGoogleMap((props) => {

    const splitCoords = props.mapCoords.split(', ')
    // const GoogleMapExample = withGoogleMap(props => (
    //   <GoogleMap
    //     defaultCenter = { { lat: parseFloat(splitCoords[0]), lng: parseFloat(splitCoords[1]) } }
    //     defaultZoom = { 16 }
    //   >
    //   </GoogleMap>
   // ))
   debugger
   return(
      <div>
        {/* <GoogleMapExample
          containerElement={ <div style={{ height: `100%`, width: '100%' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        /> */}
        <GoogleMap
          defaultCenter = { { lat: parseFloat(splitCoords[0]), lng: parseFloat(splitCoords[1]) } }
          defaultZoom = { 15 }
        />
      </div>
   );
}));
export default MyMapComponent;
