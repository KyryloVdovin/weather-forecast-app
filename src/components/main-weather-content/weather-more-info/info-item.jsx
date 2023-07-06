import s from './more-info-item.module.css';

const MoreInfoItem = ({ value, title, hourlyUnits, icon, maxValue, scale }) => {
    const progressBarValue = (value * 100) / maxValue;
    let scales = [];

    for (let i = 0; i <= maxValue;) {
        scales.push(i);
        i += maxValue / scale;
    }

    return (
        <div className={s.moreInfoItem}>
            <div className={s.itemHeader}>
                <p>{title}</p>
                <img src={icon} />
            </div>
            <div className={s.value}>{value}{hourlyUnits}</div>
            <div className={s.scale}>
                {
                    scales.map((item, index) => {
                        let scale;

                        if (index === 0)
                            scale = <div key={index}>{item}</div>
                        else if (index > 0 && index < scale)
                            scale = <div key={index} style={{ marginLeft: 4 + 'px' }}>{item}</div>
                        else
                            scale = <div key={index} style={{ marginRight: -4 + 'px' }}>{item}</div>

                        return scale
                    })
                }
            </div>
            <div className={`${s.progressBarBG}`}>
                <div className={s.fill} style={{ width: `${progressBarValue}%` }}></div>
            </div>
        </div>
    )
}

export default MoreInfoItem;