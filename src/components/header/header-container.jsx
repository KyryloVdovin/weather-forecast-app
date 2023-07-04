import Header from "./header";
import { connect } from "react-redux"
import { getLocationsData, setCurrentLocationData } from '../redux/header-reducer';
import { getWeather } from '../redux/main-content-reducer';
import { reset } from 'redux-form';

const mapDispatchToProps = (state) => {
    return {
        foundLocations: state.header.foundLocations,
        findCityForm: state.form.findCity
    }
}

const HeaderContainer = connect(mapDispatchToProps, { getLocationsData, getWeather, reset, setCurrentLocationData })(Header);

export default HeaderContainer;