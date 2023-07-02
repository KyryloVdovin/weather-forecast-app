import Accordion from './weather-accordion-item';
import './main-content.css';
import { useEffect } from 'react';

const MainContent = (props) => {
    useEffect(() => {
        props.getWeather();
    }, []);

    let weatherItem = [];
    let forecasItems;

    if (!props.isFetching) {
        console.log(props.isFetching);
        const { time, weathercode, temperature_2m_max, temperature_2m_min,
            precipitation_sum, rain_sum, windspeed_10m_max, winddirection_10m_dominant } = props.weatherData?.daily;

        const onGeneratedRow = (data, index) => {

            let jsonData = {};

            jsonData["id"] = index;
            jsonData["time"] = time[index];
            jsonData["weatherCode"] = weathercode[index];
            jsonData["temperatureMax"] = temperature_2m_max[index];
            jsonData["temperatureMin"] = temperature_2m_min[index];
            jsonData["precipitationSum"] = precipitation_sum[index];
            jsonData["rainSum"] = rain_sum[index];
            jsonData["windspeedMax"] = windspeed_10m_max[index];
            jsonData["windDirection"] = winddirection_10m_dominant[index];

            weatherItem.push(jsonData);
        }

        time.map((i, index) => onGeneratedRow(i, index));
        forecasItems = weatherItem.map(item => {
            return <Accordion key={item.id} time={item.time} weatherCode={item.weatherCode} temperatureMax={item.temperatureMax} temperatureMin={item.temperatureMin}
                precipitationSum={item.precipitationSum} rainSum={item.rainSum} windspeedMax={item.windspeedMax} windDirection={item.windDirection} />;
        });
    }

    return (
        <div className="weather-content-flex">

            {console.log("weatherItem")}
            {console.log(props.weatherData)}
            <div className="detail-info-container">
            </div>
            <div className="accordion-items-container">
                {forecasItems}
            </div>
        </div>
    )
}

export default MainContent;