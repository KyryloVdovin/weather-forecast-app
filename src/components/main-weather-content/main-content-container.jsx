import MainContent from "./main-content";
import { connect } from "react-redux"
import { getWeather } from '../redux/main-content-reducer';

const mapDispatchToProps = (state) => {
    return {
        weatherData: state.mainContentPage.weatherData,
        isFetching: state.mainContentPage.isFetching,
    }
}

const MainContentContainer = connect(mapDispatchToProps, { getWeather })(MainContent);

export default MainContentContainer;