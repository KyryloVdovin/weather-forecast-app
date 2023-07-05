import WeatherAccordionItem from './weather-accordion-item';
import CurrentLocationWeather from './current-location-weather/current-location-weather';
import './main-content.css';
import { useEffect } from 'react';
import { getTime, getIsDataSame, getWeatherIcon, weatherCodeSelector } from './weather-code-selector';
import CurrentTemperature from './current-location-weather/current-temperature';
import CurrentWeatherMoreInfo from './weather-more-info/current-weather-more-info';

const MainContent = (props) => {
    useEffect(() => {
        props.getWeather();
    }, []);

    let weatherItem = [];
    let forecasItems;
    let sunriseTime, sunsetTime;
    let weatherIcon = getWeatherIcon(props.currentWeatherCode);
    let weatherDesc = weatherCodeSelector(props.currentWeatherCode);

    if (props.isFetchingSuccess) {
        const { time, weathercode, temperature_2m_max, temperature_2m_min,
            precipitation_sum, rain_sum, snowfall_sum, windspeed_10m_max,
            winddirection_10m_dominant, sunrise, sunset } = props.weatherData.daily;

        const onGeneratedRow = (data, index) => {
            let jsonData = {};

            jsonData["id"] = index;
            jsonData["time"] = time[index];
            jsonData["weatherCode"] = weathercode[index];
            jsonData["temperatureMax"] = temperature_2m_max[index];
            jsonData["temperatureMin"] = temperature_2m_min[index];
            jsonData["precipitationSum"] = precipitation_sum[index];
            jsonData["rainSum"] = rain_sum[index];
            jsonData["snowfallSum"] = snowfall_sum[index];
            jsonData["windspeedMax"] = windspeed_10m_max[index];
            jsonData["windDirection"] = winddirection_10m_dominant[index];
            jsonData["dailyUnits"] = props.weatherData.daily_units;

            weatherItem.push(jsonData);

            if (getIsDataSame(props.currentWeather.time, time[index])) {
                sunriseTime = getTime(sunrise[index]);
                sunsetTime = getTime(sunset[index]);
            }
        }

        time.map((i, index) => onGeneratedRow(i, index));
        forecasItems = weatherItem.map(item => {
            return <WeatherAccordionItem key={item.id} time={item.time} weatherCode={item.weatherCode}
                temperatureMax={item.temperatureMax} temperatureMin={item.temperatureMin}
                precipitationSum={item.precipitationSum} rainSum={item.rainSum} snowfallSum={item.snowfallSum} windspeedMax={item.windspeedMax}
                windDirection={item.windDirection} dailyUnits={item.dailyUnits} />;
        });
    }

    return (
        <div className="weather-content-flex">
            <div className="detail-info-container">
                <CurrentLocationWeather currerntCountry={props.currerntCountry} currentCity={props.currentCity}
                    sunriseTime={sunriseTime} sunsetTime={sunsetTime} />
                <CurrentTemperature weatherIcon={weatherIcon} temperature={props.currentTemperature} weatherDesc={weatherDesc} />
                <CurrentWeatherMoreInfo currentWeatherTime={props.currentWeatherTime} hourly={props.hourly}
                    hourlyUnits={props.hourlyUnits} />
            </div>
            <div className="accordion-items-container">
                {forecasItems}
            </div>
        </div>
    )
}

export default MainContent;