
'use client';

import Link from "next/link";
import React from "react";
import { useState } from "react";


export default function Home() {

  const [cityname, setCityName] = useState("");
  const [codeData, setCode] = useState({code: "", cityName: ""});


  const HandleChange = async(e: any) => {
    setCityName(e.target.value)
    const response = await fetch(`https://www.jma.go.jp/bosai/common/const/area.json`)
    const res = await response.json()
    const keySet = Object.keys(res["offices"]);

    for (var i = 0; i<keySet.length; i ++) {
      if (res["offices"][keySet[i]].name == e.target.value) {
        setCode({code:keySet[i], cityName: e.target.value})
      }
    }
  } 


  return (
    <>
      <h1>Hello, Weather App</h1>
      <input value = {cityname}  onChange={HandleChange}/>
      <button>
        <Link href={{ pathname: "weather", query: codeData}}>
        天気取得
        </Link>
      </button>

      <Link href = {"/map" }>mapsample</Link>


      {/* <button onClick={HandleClick}>テスト</button>
      {data.code} */}

    </>

  )
}
