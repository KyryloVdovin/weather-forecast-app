import MainContent from "./main-content";
import { connect } from "react-redux"
import { getWeather } from '../redux/main-content-reducer';

const mapDispatchToProps = (state) => {
    return {
        weatherData: state.mainContentPage.weatherData,
        isFetchingSuccess: state.mainContentPage.isFetchingSuccess,
    }
}

const MainContentContainer = connect(mapDispatchToProps, { getWeather })(MainContent);

export default MainContentContainer;