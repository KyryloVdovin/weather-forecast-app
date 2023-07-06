import clearSkyD from '../../images/icons/weather-symbols/0d.svg';
import clearSkyN from '../../images/icons/weather-symbols/0n.svg';
import mainlyClearD from '../../images/icons/weather-symbols/1d.svg';
import mainlyClearN from '../../images/icons/weather-symbols/1n.svg';
import partlyCloudyD from '../../images/icons/weather-symbols/2d.svg';
import partlyCloudyN from '../../images/icons/weather-symbols/2n.svg';
import overcast from '../../images/icons/weather-symbols/3.svg';
import fog from '../../images/icons/weather-symbols/45.svg';
import rainLight from '../../images/icons/weather-symbols/61.svg';
import rainModerate from '../../images/icons/weather-symbols/63.svg';
import rainHeavy from '../../images/icons/weather-symbols/65.svg';
import freezingRainLight from '../../images/icons/weather-symbols/66.svg';
import freezingRainHeavy from '../../images/icons/weather-symbols/67.svg';
import snowFallSlight from '../../images/icons/weather-symbols/71.svg';
import snowFallModerate from '../../images/icons/weather-symbols/73.svg';
import snowFallHeavy from '../../images/icons/weather-symbols/75.svg';
import rainShowersSlightD from '../../images/icons/weather-symbols/80d.svg';
import rainShowersSlightN from '../../images/icons/weather-symbols/80n.svg';
import rainShowersModerateD from '../../images/icons/weather-symbols/81d.svg';
import rainShowersModerateN from '../../images/icons/weather-symbols/81n.svg';
import rainShowersViolentD from '../../images/icons/weather-symbols/82d.svg';
import rainShowersViolentN from '../../images/icons/weather-symbols/82n.svg';
import snowShowersViolentD from '../../images/icons/weather-symbols/85d.svg';
import snowShowersViolentN from '../../images/icons/weather-symbols/85n.svg';
import snowShowersHeavyD from '../../images/icons/weather-symbols/86d.svg';
import snowShowersHeavyN from '../../images/icons/weather-symbols/86n.svg';
import thunderstormSlight from '../../images/icons/weather-symbols/95.png';
import thunderstormWithSlightHailD from '../../images/icons/weather-symbols/96d.svg';
import thunderstormWithSlightHailN from '../../images/icons/weather-symbols/96n.svg';
import thunderstormWithHeavyHailD from '../../images/icons/weather-symbols/99d.svg';
import thunderstormWithHeavyHailN from '../../images/icons/weather-symbols/99n.svg';

const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const weatherCodeData = [
    {
        id: 0, weatherCode: 0, weatherCodeDesc: "Clear sky", image: clearSkyD,
    },
    {
        id: 1, weatherCode: 1, weatherCodeDesc: "Mainly clear", image: mainlyClearD,
    },
    {
        id: 2, weatherCode: 2, weatherCodeDesc: "Partly cloudy", image: partlyCloudyD
    },
    {
        id: 3, weatherCode: 3, weatherCodeDesc: "Overcast", image: overcast
    },
    {
        id: 4, weatherCode: 45, weatherCodeDesc: "Fog", image: fog
    },
    {
        id: 5, weatherCode: 48, weatherCodeDesc: "Depositing rime fog", image: fog
    },/* add later */
    {
        id: 6, weatherCode: 51, weatherCodeDesc: "Drizzle: Light", image: rainLight
    },/* add later */
    {
        id: 7, weatherCode: 53, weatherCodeDesc: "Drizzle: moderate", image: rainLight
    },/* add later */
    {
        id: 8, weatherCode: 55, weatherCodeDesc: "Drizzle: dense intensity", image: rainModerate
    },/* add later */
    {
        id: 9, weatherCode: 56, weatherCodeDesc: "Freezing Drizzle: Light", image: freezingRainLight
    },/* add later */
    {
        id: 10, weatherCode: 57, weatherCodeDesc: "Freezing Drizzle: dense intensity", image: freezingRainHeavy
    },/* add later */
    {
        id: 11, weatherCode: 61, weatherCodeDesc: "Rain: Slight", image: rainLight
    },
    {
        id: 12, weatherCode: 63, weatherCodeDesc: "Rain: moderate", image: rainModerate
    },
    {
        id: 13, weatherCode: 65, weatherCodeDesc: "Rain: heavy intensity", image: rainHeavy
    },
    {
        id: 14, weatherCode: 66, weatherCodeDesc: "Freezing Rain: Light", image: freezingRainLight
    },
    {
        id: 15, weatherCode: 67, weatherCodeDesc: "Freezing Rain: heavy intensity", image: freezingRainHeavy
    },
    {
        id: 16, weatherCode: 71, weatherCodeDesc: "Snow fall: Slight", image: snowFallSlight
    },
    {
        id: 17, weatherCode: 73, weatherCodeDesc: "Snow fall: moderate", image: snowFallModerate
    },
    {
        id: 18, weatherCode: 75, weatherCodeDesc: "Snow fall: heavy intensity", image: snowFallHeavy
    },
    {
        id: 19, weatherCode: 77, weatherCodeDesc: "Snow grains", image: snowFallSlight
    }, /* add later */
    {
        id: 20, weatherCode: 80, weatherCodeDesc: "Rain showers: Slight", image: rainShowersSlightD
    },
    {
        id: 21, weatherCode: 81, weatherCodeDesc: "Rain showers: moderate", image: rainShowersModerateD
    },
    {
        id: 22, weatherCode: 82, weatherCodeDesc: "Rain showers: violent", image: rainShowersViolentD
    },
    {
        id: 23, weatherCode: 85, weatherCodeDesc: "Snow showers slight", image: snowShowersViolentD
    },
    {
        id: 24, weatherCode: 86, weatherCodeDesc: "Snow showers heavy", image: snowShowersHeavyD
    },
    {
        id: 25, weatherCode: 95, weatherCodeDesc: "Thunderstorm: Slight", image: thunderstormSlight
    },
    {
        id: 26, weatherCode: 96, weatherCodeDesc: "Thunderstorm with slight hail", image: thunderstormWithSlightHailD
    },
    {
        id: 27, weatherCode: 99, weatherCodeDesc: "Thunderstorm with heavy hail", image: thunderstormWithHeavyHailD
    },
]

export const weatherCodeSelector = (weatherCode) => {
    let weatherCodeDesc = 'Not found';

    weatherCodeData.map(item => {
        if (weatherCode === item.weatherCode) {
            weatherCodeDesc = item.weatherCodeDesc;
        }
    });

    return weatherCodeDesc;
}
const formatDataTime = (dataTime) => {
    const forecastData = new Date(dataTime);

    return forecastData;
}
export const getDay = (dataTime) => {
    const forecastData = formatDataTime(dataTime);

    return weekday[forecastData.getUTCDay()];
}
export const getMonth = (dataTime) => {
    const forecastData = formatDataTime(dataTime);

    return month[forecastData.getUTCMonth()];
}
export const getDayNumber = (dataTime) => {
    const forecastData = formatDataTime(dataTime);

    return forecastData.getDate();
}
export const getTime = (dataTime) => {
    const forecastData = formatDataTime(dataTime);
    const hours = forecastData.getHours() < 10 ? `0${forecastData.getHours()}` : forecastData.getHours();
    const minutes = forecastData.getMinutes() < 10 ? `0${forecastData.getMinutes()}` : forecastData.getMinutes();

    return `${hours}:${minutes}`;
}

export const getIsDataSame = (data1, data2) => {
    return getDayNumber(data1) === getDayNumber(data2);
}

export const getWeatherIcon = (weatherCode) => {
    let weatherIcon;

    weatherCodeData.map(item => {
        if (weatherCode === item.weatherCode) {
            weatherIcon = item.image;
        }
    });

    return weatherIcon;
}