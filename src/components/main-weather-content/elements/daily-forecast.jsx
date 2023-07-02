import s from './daily-forecast.module.css';
import icon from '../../../images/icons/umbrella.png';

const DailyForecast = ({ title, value, units }) => {
    return (
        <div className={s.dailyForecast}>
            <img src={icon} />
            <div>{title}</div>
            <div className={s.units}>{units}</div>
            <div>{value}</div>
        </div>
    )
}

export default DailyForecast;