import React, { useState } from 'react'
import { GoogleMap, useJsApiLoader, Polygon, Marker, google } from '@react-google-maps/api';

function MyComponent(props) {
    const mapContainerStyle = {
      height: "400px",
      width: "800px"
    }

    const [center, setCenter] = useState({lat: 36.778261, lng: -119.417932});
    const { isLoaded, loadError } = useJsApiLoader({
        googleMapsApiKey: "AIzaSyBLN2RSxL2MAEy9f7yO0eEaakk6nmwTBnE" // ,
      })  
    if (isLoaded === false)
      return null;

    if (props.text == null) 
      return (
        <GoogleMap
            id="marker-example"
            mapContainerStyle={mapContainerStyle}
            zoom={5}
            center={center}>
        </GoogleMap>
      );

    var dict = {
      lat: parseFloat(props.text.latitude),
      lng: parseFloat(props.text.longitude)
    };

    return (
      <GoogleMap
          id="marker-example"
          mapContainerStyle={mapContainerStyle}
          zoom={5}
          center={dict}>
           <Marker
            icon={"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"}
            position={dict}
          />
      </GoogleMap>
    );
}

export default MyComponent