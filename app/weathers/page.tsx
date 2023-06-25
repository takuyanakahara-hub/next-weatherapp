'use client';


import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function apiCall() {

  const searchParam = useSearchParams();
  const search: any = searchParam.get('name')
  //console.log(search)
  const [codeData, setCode] = useState({code: "", cityName: ""});
  const [weather, setWeather] = useState({ area: "", weather: ""});

  const getWeather = async(d: object) => {
    const req = await fetch("/api/weather", {
      method:'POST',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify(d),
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data)

      setWeather({area: data.data.targetArea, weather: data.data.text})
    })
  }

  useEffect(() => {
    const postData = async() => {
      //console.log(cityname)
      
      const req = await fetch('/api/codeget', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
  
        body: JSON.stringify({ name: search}),
      })
      .then((res) => res.json())
      .then((data) => {
        const obj:any = new Object({ code: data.code, cityName: data.area })
        setCode(obj)
      })
    }
    postData();
  }, [])

  useEffect(() => {
    getWeather(codeData)
  }, [codeData])

  return (
    <>

    { weather.area }
    <br>
    </br>

    {weather.weather}
    </>
  );
}