import s from './daily-forecast.module.css';
import icon from '../../../images/icons/umbrella.png';

const DailyForecast = ({ title, content }) => {
    return (
        <div className={s.dailyForecast}>
            <img src={icon} />
            <div>{title}</div>
            <div>68%</div>
        </div>
    )
}

export default DailyForecast;