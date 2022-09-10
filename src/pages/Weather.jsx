import React from "react";
import { useLocation, useParams } from "react-router-dom";
import Header from "../components/header/Header";
import WeatherInfo from "../components/weatherInfo/WeatherInfo";


const Weather = (props) => {
    console.log(props.city)
    return (
        <div >
            <Header city={props.city}/>
            <WeatherInfo city={props.city}/>
        </div>
    )
}

export default Weather;