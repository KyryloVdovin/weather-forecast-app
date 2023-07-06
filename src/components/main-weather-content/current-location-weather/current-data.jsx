

const CurrentData = ({currentWeekDay, currentDayNumber, currentMonth}) => {
    return (
        <div>
            <span>{currentWeekDay} {currentDayNumber} {currentMonth}</span>
        </div>
    )
}

export default CurrentData;