'use client';
import { Suspense, use, useState } from "react";
import { useRouter } from "next/navigation";
import { getItem, removeItem, setItem, KEYS } from "../localStorage";
import { useSearchParams } from "next/navigation";

interface weather  {
  targetArea: string;
  text: string;
}

const getWeather = async (id: string): Promise<weather> => 
  await fetch(`https://www.jma.go.jp/bosai/forecast/data/overview_forecast/${id}.json`)
  .then((r) => r.json())
  .then(

  (r) => new Promise((resolve) => setTimeout(() => resolve(r), 1000))
  )


const WeatherData = () => {
  const searchParam = useSearchParams();
  const search: any = searchParam.get('code');

  console.log(search);
  const weather = use(getWeather(search));
  const localstorage = setItem(weather.targetArea, weather.text);

  const data = getItem(weather.targetArea); 

  return (
    <>
      {/* <h3>APIから取得</h3>
      <h2>{ weather.targetArea }の天気</h2>
      <p>{ weather.text }</p> */}

      <h3>ローカルストレージから取得</h3>
      <p>{ weather.targetArea }の天気</p>
      <p> { data } </p>

    </>
  )
}

function Loading() {
  return (
    <>
      <h2>🌀Loading....</h2>
    </>
  );
}

export default function Home() {

  const router:any = useRouter();

  
  return (
    <>
      <h1 onClick={() => router.push('/')}>Hello, Weather App</h1>
      <Suspense fallback={<Loading />}>
      <WeatherData />
      </Suspense>

      { router.query }
      
  
    </>
  )
}