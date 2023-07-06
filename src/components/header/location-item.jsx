import s from './location-item.module.css';

const LocationItem = (props) => {
    const { countryCode, name, country, latitude, longitude, adminRegion } = props;

    const selectCity = () => {
        props.getWeather(latitude, longitude);
        props.setCurrentLocationData(country, name);
    }

    const resetForm = (e) => {
        e.preventDefault();
        props.reset('findCity');
        props.getLocations('');
    }

    return (
        <div className={s.locationItem} onClick={e => {selectCity(); resetForm(e);}}>
            <img src={`https://flagcdn.com/24x18/${countryCode.toLowerCase()}.png`} />
            <span>{name}, {adminRegion}, {country}</span>
        </div>
    )
}

export default LocationItem;