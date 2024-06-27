

import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import env from "../../config"

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

// Corrected SVG marker definition
const svgMarker = {
  path: "M12 2C8.13 2 5 5.13 5 9c0 4.45 5.74 10.74 6.38 11.38.37.37.97.37 1.34 0C13.26 19.74 19 13.45 19 9c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 .01-5.01A2.5 2.5 0 0 1 12 11.5z",
  fillColor: "red",
  fillOpacity: 1.0,
  strokeWeight: 0,
  scale: 2,
};

const GoogleMapComponent = () => {
  return (
    <LoadScript googleMapsApiKey={env.GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        <Marker 
          position={center}
          icon={{
            path: svgMarker.path,
            fillColor: svgMarker.fillColor,
            fillOpacity: svgMarker.fillOpacity,
            strokeWeight: svgMarker.strokeWeight,
            scale: svgMarker.scale,
          }}
        />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;



