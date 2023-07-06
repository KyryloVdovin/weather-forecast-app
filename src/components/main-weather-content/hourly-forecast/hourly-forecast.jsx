import HourlyForecastItem from './hourly-forecast-item';
import s from './hourly-forecast.module.css';

const HOURS_IN_DAY = 24;

const HourlyForecast = (props) => {
    let items = [];

    const onGeneratedRow = (id, value) => {
        let jsonData = {};

        Object.keys(props.hourlyForecast).forEach(function (key, index) {
            jsonData["id"] = id;
            jsonData[key] = props.hourlyForecast[key][value];
            // jsonData["hourlyUnits"] = hourlyUnits[key];
        });

        items.push(jsonData);
    }

    let start = props.index * HOURS_IN_DAY;
    let end = HOURS_IN_DAY * (props.index + 1);
    let id = 0;

    for (let i = start; i < end; i++) {
        onGeneratedRow(id++, i);
    }

    const hourlyForecastItems = items.map(item => {
        return <HourlyForecastItem key={item.id} {...item} />
    });

    return (
        <div className={s.hourlyForecastContainer}>
            <div className={s.titles}>
                <p>Temperature</p>
                <p>Fills like</p>
                <p>Precipitation</p>
                <p>Humidity</p>
                <p>Cloudy</p>
                <p>Wind</p>
            </div>
            < div className={s.hourlyForecast}>
                {hourlyForecastItems}
            </div>
        </div>
    )
}

export default HourlyForecast;