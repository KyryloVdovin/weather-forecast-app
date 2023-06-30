import { useState } from "react";
import s from './weather-accordion-item.module.css';
import WeatherAccordionHeader from './elements/weather-accordion-header';
import DailyForecast from './elements/daily-forecast';

const Accordion = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className={s.accordionItem}>
            <div className={s.accordionHeader} onClick={() => setIsActive(!isActive)}>
                <WeatherAccordionHeader />
                {/* <div>{isActive ? '-' : '+'}</div> */}
            </div>
            <div className={`${s.accordionContent} ${isActive ? s.accordionExpanded : s.accordionCollapsed}`}>
                <div className={s.dailyForecastItems}>
                    <DailyForecast title="Chance"/>
                    <DailyForecast title="Precipitation"/>
                    <DailyForecast title="Wind"/>
                    <DailyForecast title="Chance"/>
                </div>
            </div>
        </div>
    )
}

export default Accordion;