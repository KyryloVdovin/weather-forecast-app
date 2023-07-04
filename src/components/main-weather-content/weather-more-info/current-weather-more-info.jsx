import './current-weather-more-info.css';
import MoreInfoItem from './info-item';
import {getItemData} from './current-weather-info-item-data';

const CurrentWeatherMoreInfo = ({ currentWeatherTime, hourly, hourlyUnits }) => {
    const currentWeatherTimeIndex = hourly?.time.indexOf(currentWeatherTime);
    let infoItems = [];

    const type = ['relativehumidity_2m', 'apparent_temperature', 'precipitation_probability', 'rain', 'cloudcover', 'windspeed_10m'];
    let currentIndex = 0;

    const onGeneratedRow = (key, index) => {
        let jsonData = {};

        jsonData["id"] = index;
        jsonData["value"] = hourly[key][currentWeatherTimeIndex];
        jsonData["hourlyUnits"] = hourlyUnits[key];
        jsonData["key"] = key;

        infoItems.push(jsonData);
    }

    if (hourly) {
        Object.keys(hourly).forEach(function (key, index) {
            if (type.includes(key)) {
                onGeneratedRow(key, currentIndex);
                currentIndex++;
            }
        });
    }

    const initedInfoItems = infoItems.map((item, index) => {
        const newItem = getItemData(item);

        return <MoreInfoItem key={item.id} value={item.value} title={newItem.value}
            hourlyUnits={item.hourlyUnits} icon={newItem.icon} maxValue={newItem.maxValue}/>;
    });
    return (
        <div className='current-weather-more-info'>
            <p>More details of todays weather</p>
            {initedInfoItems}

        </div>
    )
}

export default CurrentWeatherMoreInfo;