import axios from "axios";
import React, { useEffect, useState } from "react";
import './weatherInfo.css'

const WeatherInfo = (props) => {
    const [data, setData] = useState([])
    const [currentData, setCurrentData] = useState([])
    const [todaysWeatherData, setTodaysWeatherData] = useState([])  
    const city = props.city
    const length = data.length;

    useEffect(()=> {
        const getWeatherData = async() => {
            try {
                const res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=41a948aa71802a0ad23b2f165605e024&units=metric`)
                setData(res.data.list)
            } catch(err) {
                console.log(err)
            }
            
        }
        
        getWeatherData()

        const todaysData = data.filter((d)=> new Date(d.dt_txt).getDay() === new Date().getDay())
        setTodaysWeatherData(todaysData.length > 0 && todaysData[0])

        const filteredData = data.filter((data)=> new Date(data.dt_txt).toLocaleTimeString() === "9:00:00 AM" && new Date(data.dt_txt).getDay() !== new Date().getDay())
        setCurrentData(filteredData)

    }, [length, city])

    //returns the name of the week
    const getDayName = (day) => {
        const name = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
        if (day === new Date().getDay()) {
            return "TODAY"
        } else {
            return name[day];
        }
    }

    //This function return the url with appropriate icon names
    const getImageFromUrl = (icon) => {
        return "http://openweathermap.org/img/wn/" + icon + "@2x.png"
    }

    return (
        <div className="container">
            <div className="flexboxContainer">
                    
                <div className="todaysDataContainer">
                    <div className="todaysData">
                        <p style={{textAlign: "center"}}>Today</p>
                        {todaysWeatherData.length !== 0  ?
                        <div className="data1">
                            {todaysWeatherData && <img src={getImageFromUrl(todaysWeatherData.weather.map((w)=>w.icon))} width="150" height="150"/>}
                            <div className="data11">
                                <p>{todaysWeatherData &&  todaysWeatherData.main ? Math.round(todaysWeatherData.main.temp) + "*C" : "loading"}</p>
                                {todaysWeatherData && <p>{todaysWeatherData.weather.map((w)=>w.main)}</p>}  
                            </div>
                        </div> :
                        <p style={{textAlign: "center"}}>No Weather Data available</p>}
                    </div> 
                </div> 

                {currentData && currentData.map((data)=>(
                    <div className="currentDataContainer" key={data.dt}>
                    {new Date().getDay() !== new Date(data.dt_txt).getDay() &&
                    <div className="currentData">
                            <p>{getDayName(new Date(data.dt_txt).getDay())}</p>
                            <div className="info1">
                            {data.weather.map((d)=><img src={getImageFromUrl(d.icon)} width="150" height="150"/>)}
                                <div className="data2">
                                    <p style={{margin: "0px"}}>{data.main ? Math.round(data.main.temp) + "*C" : "loading"}</p>                               
                                    {data.weather.map((d)=><p style={{marginTop: "4px"}}>{d.main}</p>)}
                                </div>
                            </div>
                    </div>}
                </div>   
                ))}
                
            </div>
        </div>
    )
}

export default WeatherInfo;