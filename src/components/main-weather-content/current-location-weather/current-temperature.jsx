import './current-temperature.css';

const CurrentTemperature = ({ weatherIcon, temperature, weatherDesc }) => {
    return (
        <div className='current-temperature'>
            <p>{temperature}°</p>
            <div className='weather-code'>
                <img src={weatherIcon} />
                <span>{weatherDesc}</span>
            </div>
        </div>
    )
}

export default CurrentTemperature;