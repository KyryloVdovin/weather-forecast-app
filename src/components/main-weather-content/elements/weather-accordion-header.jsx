import s from './weather-accordion-header.module.css';
import ph from '../../../images/icons/weather-symbols/0d.svg';

const WeatherAccordionHeader = (props) => {
    const { day, dayNumber, weatherImage, weatherCodeDesc, temperatureMax, temperatureMin } = props;

    return (
        <div className={s.weatherAccordionHeader}>
            <div className={s.weatherCode}>
                <div className={s.weatherIconContainer}>
                    <img src={weatherImage} />
                </div>
                <div>
                    <p>{day} 0{dayNumber}</p>
                    <p>{weatherCodeDesc}</p>
                </div>
            </div>
            <div className={s.weatherTemperature}>
                <img src='https://icons-for-free.com/iconfiles/png/512/arrow+top+arrow+up+arrow+upward+top+up+upward+icon-1320185743440304413.png' />
                <span>{temperatureMax}°</span>
                <img className={s.minTemperatureArrow} src='https://icons-for-free.com/iconfiles/png/512/arrow+top+arrow+up+arrow+upward+top+up+upward+icon-1320185743440304413.png' />
                <span>{temperatureMin}°</span>
            </div>
        </div>
    )
}

export default WeatherAccordionHeader;