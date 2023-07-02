import { useState } from "react";
import s from './weather-accordion-item.module.css';
import WeatherAccordionHeader from './elements/weather-accordion-header';
import DailyForecast from './elements/daily-forecast';
import { weatherCodeSelector, getDay, getDayNumber, getWeatherIcon } from './weather-code-selector';

const WeatherAccordionItem = (props) => {
    const { time, weatherCode, temperatureMax, temperatureMin, precipitationSum, rainSum,
        windspeedMax, windDirection, dailyUnits } = props;
    const [isActive, setIsActive] = useState(false);

    let weatherCodeDesc = weatherCodeSelector(weatherCode);
    let day = getDay(time);
    let dayNumber = getDayNumber(time);
    let weatherImage = getWeatherIcon(weatherCode);

    return (
        <div className={s.accordionItem}>
            <div className={s.accordionHeader} onClick={() => setIsActive(!isActive)}>
                <WeatherAccordionHeader day={day} dayNumber={dayNumber} weatherImage={weatherImage} weatherCodeDesc={weatherCodeDesc}
                    temperatureMax={Math.round(temperatureMax)} temperatureMin={Math.round(temperatureMin)} />
                {/* <div>{isActive ? '-' : '+'}</div> */}
            </div>
            <div className={`${s.accordionContent} ${isActive ? s.accordionExpanded : s.accordionCollapsed}`}>
                <div className={s.dailyForecastItems}>
                    <DailyForecast title="Precipitation" value={precipitationSum} units={dailyUnits.precipitation_sum}/>
                    <DailyForecast title="Wind" values={windDirection} value={windspeedMax} units={dailyUnits.windspeed_10m_max}/>
                    <DailyForecast title="Rain" value={rainSum} units={dailyUnits.rain_sum}/>
                </div>
            </div>
        </div>
    )
}

export default WeatherAccordionItem;