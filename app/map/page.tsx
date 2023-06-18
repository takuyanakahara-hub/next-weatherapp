'use client';

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useState } from "react";

const mapAPI = "AIzaSyBl0K1XwvTYiE32JcTJwtCM7G6SixPjQWk";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: 35.69575,
  lng: 139.77521,
};

const positionAkiba = {
  lat: 35.69397,
  lng: 139.7762,
}



export default function MyComponents() {

  const [place, setPlace] = useState({});

  function clickFunk(e) {
    const latState = e.latLng.lat();
    const lngState = e.latLng.lng();

    setPlace({
      lat: latState,
      lng: lngState
    })
  }
  return (
    <>
      <LoadScript googleMapsApiKey={mapAPI}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={16}
          onClick={clickFunk}
        >
          <Marker position={place} />
          
        </GoogleMap>
      </LoadScript>
    </>
  );
}