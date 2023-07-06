import s from './hourly-forecast-item.module.css';
import { getTime, getWeatherIcon } from '../weather-code-selector';

const HourlyForecastItem = (props) => {
    const { apparent_temperature, cloudcover, precipitation_probability, weathercode,
        temperature_2m, relativehumidity_2m, windspeed_10m, time } = props;

    const weatherIon = getWeatherIcon(weathercode);
    const hours = getTime(time);
    const wind = windspeed_10m.toFixed(1);
    
    return (
        <div className={s.item}>
            <p>{hours}</p>
            <img src={weatherIon} />
            <p>{temperature_2m}°</p>
            <p>{apparent_temperature}°</p>
            <p>{precipitation_probability}%</p>
            <p>{relativehumidity_2m}%</p>
            <p>{cloudcover}%</p>
            <p>{wind}m/s</p>
        </div>
    )
}

export default HourlyForecastItem;