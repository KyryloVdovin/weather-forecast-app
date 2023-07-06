import CurrentLocation from '../../header/current-location';
import CurrentData from './current-data';
import SunRiseSet from './sun-rise-set';
import './current-location-weather.css';

const CurrentLocationWeather = ({ currentCity, currerntCountry, sunriseTime, sunsetTime,
    currentWeekDay, currentDayNumber, currentMonth }) => {
    return (
        <div className='current-location-weather-detail'>
            <div className='current-weather-left'>
                <CurrentLocation currentCity={currentCity} currerntCountry={currerntCountry} />
                <CurrentData currentWeekDay={currentWeekDay} currentDayNumber={currentDayNumber} currentMonth={currentMonth} />
            </div>
            <div className='current-weather-right'>
                <SunRiseSet type='sunrise' time={sunriseTime} />
                <SunRiseSet type='sunset' time={sunsetTime} />
            </div>
        </div>
    )
}

export default CurrentLocationWeather;