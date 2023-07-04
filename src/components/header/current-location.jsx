import './current-location.css';

const CurrentLocation = ({ currentCity, currerntCountry }) => {
    return (
        <div className="current-location">
            <span>{currentCity}, {currerntCountry}</span>
        </div>
    )
}

export default CurrentLocation;