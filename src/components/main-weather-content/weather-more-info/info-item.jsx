import s from './more-info-item.module.css';

const MoreInfoItem = ({ value, title, hourlyUnits, icon, maxValue }) => {
    const progressBarValue = (value * 100) / maxValue;

    return (
        <div className={s.moreInfoItem}>
            <div className={s.itemHeader}>
                <p>{title}</p>
                <img src={icon}/>
            </div>
            <div>{value}{hourlyUnits}</div>
            <div class={`${s.progressBarBG}`}>
                <div class={s.fill} style={{width: `${progressBarValue}%`}}></div>
            </div>
        </div>
    )
}

export default MoreInfoItem;