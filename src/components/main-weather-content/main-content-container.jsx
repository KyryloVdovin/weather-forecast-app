import MainContent from "./main-content";
import { connect } from "react-redux"
import { getWeather } from '../redux/main-content-reducer';

const mapDispatchToProps = (state) => {
    return {
        weatherData: state.mainContentPage.weatherData,
        isFetchingSuccess: state.mainContentPage.isFetchingSuccess,
        currerntCountry: state.header.country,
        currentCity: state.header.city,
        currentWeather: state.mainContentPage.weatherData?.current_weather,
        currentWeatherCode: state.mainContentPage.weatherData?.current_weather.weathercode,
        currentTemperature: Math.round(state.mainContentPage.weatherData?.current_weather.temperature),
        hourly: state.mainContentPage.weatherData?.hourly,
        hourlyUnits: state.mainContentPage.weatherData?.hourly_units,
        currentWeatherTime: state.mainContentPage.weatherData?.current_weather.time,
    }
}

const MainContentContainer = connect(mapDispatchToProps, { getWeather })(MainContent);

export default MainContentContainer;