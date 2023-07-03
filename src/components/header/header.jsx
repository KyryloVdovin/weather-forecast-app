import { Field, reduxForm } from "redux-form";
import { useEffect } from 'react';
import LocationItem from './location-item';
import CurrentLocation from './current-location';
import './header.css';

const FindCityForm = (props) => {
    const { clearFields } = props;
    return (
        <form onChange={props.handleSubmit} onPointerCancelCapture={clearFields}>
            <div className='input-container'>
                <Field component={"input"} name="cityName" placeholder={'Search city...'} />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px">
                    <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 
                    21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 
                    46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 
                    30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 
                    33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z" />
                </svg>
            </div>
            <div >
                <div>
                </div>
                <div>
                </div>
            </div>
        </form>
    )
}
const HeaderFindCityReduxForm = reduxForm({
    form: 'findCity',
    enableReinitialize: true,
    keepDirtyOnReinitialize: true,
})(FindCityForm);

const Header = (props) => {
    const getLocations = (value) => {
        props.getLocationsData(value.cityName);
    };

    const foundLocations = props.foundLocations?.map(item => {
        return <LocationItem countryCode={item.country_code} latitude={item.latitude} longitude={item.longitude}
            name={item.name} country={item.country} getWeather={props.getWeather} input={props.findCityForm} reset={props.reset}
            foundLocations={props.foundLocations} getLocations={getLocations} setCurrentLocationData={props.setCurrentLocationData} />
    });

    return (
        <div className="header-container">
            <div>
                <HeaderFindCityReduxForm onSubmit={getLocations} foundLocationsItems={foundLocations} />
                <CurrentLocation currentCity={props.currentCity} currerntCountry={props.currerntCountry} />
            </div>
            {props.foundLocations && <div className='found-locations'>{foundLocations}</div>}
        </div>
    )
}

export default Header;