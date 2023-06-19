'use client';

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useEffect, useState } from "react";

const mapAPI = "AIzaSyBl0K1XwvTYiE32JcTJwtCM7G6SixPjQWk";

const containerStyle = {
  width: "100vh",
  height: "100vh",
};

const center = {
  lat: 35.69575,
  lng: 139.77521,
};

export default function MyComponents() {

  const [place, setPlace] = useState({});
  const [placeName, setPlaceName] = useState("");
  const [codeData, setCode] = useState({code: "", cityName: ""});

  async function clickFunk(e) {
    const latState = e.latLng.lat();
    const lngState = e.latLng.lng();

    await fetch(`http://geoapi.heartrails.com/api/json?method=searchByGeoLocation&x=${lngState}&y=${latState}`).
    then((res) => res.json()). 
    then((data) => {
      console.log(data.response.location[0]["prefecture"]);
      setPlaceName(data.response.location[0]["prefecture"]);
    })

    const response = await fetch(`https://www.jma.go.jp/bosai/common/const/area.json`)
    const res = await response.json()
    const keySet = Object.keys(res["offices"]);

    for (var i = 0; i<keySet.length; i ++) {
      if (res["offices"][keySet[i]].name == placeName) {
        setCode({code:keySet[i], cityName: placeName})
      }
    }

    setPlace({
      lat: latState,
      lng: lngState
    })



    
    
  }

  console.log(codeData)

  useEffect(() => {
    setPlace(center);
  }, [])




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