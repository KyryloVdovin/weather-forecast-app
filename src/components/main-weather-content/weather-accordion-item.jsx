import { useState } from "react";
import s from './weather-accordion-item.module.css';
import WeatherAccordionHeader from './elements/weather-accordion-header';
import DailyForecast from './elements/daily-forecast';
import { weatherCodeSelector, getDay, getDayNumber, getWeatherIcon } from './weather-code-selector';
import precipitation from '../../images/icons/precipitation.png';
import rain from '../../images/icons/rain.png';
import wind from '../../images/icons/wind.png';
import snow from '../../images/icons/snow.png';

const WeatherAccordionItem = (props) => {
    const { time, weatherCode, temperatureMax, temperatureMin, precipitationSum, rainSum,
        snowfallSum, windspeedMax, windDirection, dailyUnits } = props;
    const [isActive, setIsActive] = useState(false);

    let weatherCodeDesc = weatherCodeSelector(weatherCode);
    let day = getDay(time);
    let dayNumber = getDayNumber(time);
    let weatherImage = getWeatherIcon(weatherCode);

    return (
        <div className={s.accordionItem} onClick={() => setIsActive(!isActive)}>
            <div className={s.accordionHeader} >
                <WeatherAccordionHeader day={day} dayNumber={dayNumber} weatherImage={weatherImage} weatherCodeDesc={weatherCodeDesc}
                    temperatureMax={Math.round(temperatureMax)} temperatureMin={Math.round(temperatureMin)} />
                {/* <div>{isActive ? '-' : '+'}</div> */}
            </div>
            <div className={`${s.accordionContent} ${isActive ? s.accordionExpanded : s.accordionCollapsed}`}>
                <div className={s.dailyForecastItems}>
                    <DailyForecast title="Precipitation" icon={precipitation} value={precipitationSum} units={dailyUnits.precipitation_sum} />
                    <DailyForecast title="Rain" icon={rain} value={rainSum} units={dailyUnits.rain_sum} />
                    <DailyForecast title="Wind" icon={wind} values={windDirection} value={windspeedMax} units={dailyUnits.windspeed_10m_max} />
                    <DailyForecast title="Snow" icon={snow} value={snowfallSum} units={dailyUnits.snowfall_sum} />
                </div>
                {/* <div className={s.hourlyForecast}>

                </div> */}
            </div>
        </div>
    )
}

const HourlyForecastItem = (props) => {
    return (
        <div>
            <span>13:00</span>
            <img />

        </div>
    )
}

export default WeatherAccordionItem;