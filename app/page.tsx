
'use client';

import Link from "next/link";
import React, { useEffect } from "react";
import { useState } from "react";


export default function Home() {

  //const obj = new Object();

  const [cityname, setCityName] = useState("");
  

  const inputValue = (e:any) => {
    setCityName(e.target.value)
  }

  return (
    <>
      <h1>Hello, Weather App</h1>
      <input type="text" id="areaname" value={cityname} onChange={inputValue} />

      <Link href = {"/map" }>mapsample</Link>
      
      <Link  href={{ pathname: "weathers", query: {name: cityname} }}>
        <button>
        取得
        </button>
      </Link>
    </>

  )
}
