'use client';

import { Wrapper } from "@googlemaps/react-wrapper";
import { useEffect, useRef, useState } from "react";

const VIEW_STYLE = {
  width: '100%',
  aspectRatio: '16 / 9',
}

function Content({
  center,
  zoom,
}: {
  center: google.maps.LatLngLiteral;
  zoom: number;
}) {
  const ref = useRef();

  useEffect(() => {
    new window.google.maps.Map(ref.current, {
      center,
      zoom,
    });
  });

  return <div style={VIEW_STYLE} ref={ref} id="map" />;
}


export default function Map() {
  const center = { lat: -34.397, lng: 150.644 };
  const zoom = 4;

  return (
      <Wrapper apiKey={ "AIzaSyBl0K1XwvTYiE32JcTJwtCM7G6SixPjQWk" }>
        <Content center={center} zoom={zoom} />
      </Wrapper>
  );
}