import humidifyIcon from '../../../images/icons/humidity.png';
import precipitationIcon from '../../../images/icons/precipitation.png';
import rainIcon from '../../../images/icons/rain.png';
import temperatureIcon from '../../../images/icons/thermometer.png';
import windIcon from '../../../images/icons/wind.png';
import cloudIcon from '../../../images/icons/cloud.png';

const weatherItemTitles = [
    { key: 'relativehumidity_2m', value: 'Humidity', icon: humidifyIcon, maxValue: 100, scale: 5},
    { key: 'apparent_temperature', value: 'Feels like', icon: temperatureIcon, maxValue: 50, scale: 5 },
    { key: 'precipitation_probability', value: 'Precipitation', icon: precipitationIcon, maxValue: 100, scale: 5 },
    { key: 'rain', value: 'Rain', icon: rainIcon, maxValue: 200, scale: 5 },
    { key: 'cloudcover', value: 'Cloudy', icon: cloudIcon, maxValue: 100, scale: 5 },
    { key: 'windspeed_10m', value: 'Wind', icon: windIcon, maxValue: 40, scale: 4 },
];

export const getItemData = (item) => {
    return weatherItemTitles.find(element => element.key === item.key);
}