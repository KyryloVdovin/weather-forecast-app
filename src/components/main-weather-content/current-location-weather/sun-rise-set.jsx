import sunrise from '../../../images/icons/sun-rise-set/sunrise.png';
import sunset from '../../../images/icons/sun-rise-set/sunset.png';

const SunRiseSet = ({ type, time }) => {
    const sunnIcon = type === 'sunrise' ? sunrise : sunset;

    return (
        <div>
            <img src={sunnIcon} />
            <span>{time}</span>
        </div>
    )
}

export default SunRiseSet;