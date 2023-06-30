import s from './weather-accordion-header.module.css';

const WeatherAccordionHeader = (props) => {
    return (
        <div className={s.weatherAccordionHeader}>
            <div className={s.weatherCode}>
                <div className={s.weatherIconContainer}>
                    <img src="https://cdn-icons-png.flaticon.com/512/1779/1779940.png" />
                </div>
                <div>
                    <p>Tomorrow</p>
                    <p>Light rain showers</p>
                </div>
            </div>
            <div className={s.weatherTemperature}>
                <img src='https://icons-for-free.com/iconfiles/png/512/arrow+top+arrow+up+arrow+upward+top+up+upward+icon-1320185743440304413.png'/>
                <span>20°</span>
                <img src='https://icons-for-free.com/iconfiles/png/512/arrow+top+arrow+up+arrow+upward+top+up+upward+icon-1320185743440304413.png'/>
                <span>17°</span>
            </div>
        </div>
    )
}

export default WeatherAccordionHeader;