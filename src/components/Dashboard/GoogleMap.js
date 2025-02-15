import React, { useState } from 'react';
import { GoogleMap, LoadScript, useJsApiLoader, MarkerF, Autocomplete } from '@react-google-maps/api';
import { Box, Typography } from '@mui/material';
// import env from "../../config";

const containerStyle = {
  width: '100%',
  height: '80%',
  position: 'relative',
  borderRadius: '15px',
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

//  my static marker location points 
const markerPoints = [
  { lat: -3.745, lng: -38.523 },
  { lat: -3.745, lng: -38.5231 },
  { lat: -3.7452, lng: -38.524 },
  { lat: -3.745, lng: -38.510 },
  { lat: -3.743, lng: -38.520 },
  { lat: -3.740, lng: -38.510 }
];

const svgMarker = {
  path: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
  fillColor: "#F00000",
  fillOpacity: 1,
  strokeWeight: 1,
  scale: 2
};

const GoogleMapComponent = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  });

  const [map, setMap] = useState(null);
  const [autocomplete, setAutocomplete] = useState(null); 

  const onLoad = (map) => {
    setMap(map);
  };

  const onUnmount = () => {
    setMap(null);
  };

  const handlePlaceSelect = () => {
    if (autocomplete !== null) {
      const place = autocomplete.getPlace();
      console.log('Selected place:', place);
      // This API project is not authorized to use this API. Places API error: ApiNotActivatedMapError
      //the above error is showing while searching in map
    }
  };

  return (
    <Box sx={{ borderRadius: "20px", width: "100%", height: "100%", position: "relative" }}>
      <Typography sx={{ fontSize: "22px", fontWeight: "bold", marginLeft: 0 }}>Track on map</Typography>
      <LoadScript
        googleMapsApiKey={ process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
        libraries={["places"]}
      >
        {isLoaded && (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={{
              streetViewControl: false,
              mapTypeControl: false
            }}
          >
            {/* Adding  my custom svg marker */}
            {markerPoints.map((point, i) => (
              <MarkerF
                key={i}
                position={point}
                icon={svgMarker}
              />
            ))}
            {/* styles for the Overlaying search box because while scrolling posintion absolute will not move */}
            <Box
              sx={{
                position: 'absolute',
                top: '20px',
                left: '85%',
                zIndex: 1000,
                maxWidth: '300px',
              }}
            >
              <Autocomplete onLoad={(auto) => setAutocomplete(auto)} onPlaceChanged={handlePlaceSelect}>
                <input
                  type="text"
                  placeholder="Search"
                  style={{
                    width: '100%',
                    height: '40px',
                    padding: '15px',
                    borderRadius: '15px',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                    fontSize: '14px',
                    boxSizing: 'border-box',
                    border: 'none',
                 
                  }}
                />
              </Autocomplete>
            </Box>
          </GoogleMap>
        )}
      </LoadScript>
    </Box>
  );
};

export default React.memo(GoogleMapComponent);
