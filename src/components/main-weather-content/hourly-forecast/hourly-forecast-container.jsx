import HourlyForecast from "./hourly-forecast";
import { connect } from "react-redux"

const mapDispatchToProps = (state) => {
    return {
        hourlyForecast: state.mainContentPage.weatherData?.hourly,
        hourlyUnits: state.mainContentPage.weatherData?.hourly_units,
        days: state.mainContentPage.weatherData?.daily.time,
    }
}

const HourlyForecastContainer = connect(mapDispatchToProps, {})(HourlyForecast);

export default HourlyForecastContainer;