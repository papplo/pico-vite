import { daysInMonth, gregorianCalendarMonths, monthStartsOnDayOfWeek, weekDays, createCalendarDayItem, CalendarDateItem } from './shared/constants';
import { scheduleSlots } from './shared/mocks';
import './shared/calendar.styles.css';

interface CalendarProps {
    monthOfYear?: number // 0-index based as in js Date
}

export default function Calendar({ monthOfYear = 1 }: CalendarProps) {
    function DaySelectionItem({ name, id, description }) {
        return (
            <>
                <article>
                    <input
                        id={id && id}
                        type='radio'
                        name='slot'
                        value={name}
                    />
                    <label htmlFor={id && id}>
                        {name && name}
                        <small>
                            {description && description.replace('From', '')}
                        </small>
                    </label>
                </article>
            </>
        );
    }

    const 
        now = new Date( 2022, monthOfYear),
        month = now.getMonth(),
        year = now.getFullYear(),
        day = now.getDate(),
        daysInCurrentMonth = daysInMonth(month, year),
        monthStartDay = monthStartsOnDayOfWeek(month, year)

 
    const calendarDays = () => {
        let result: CalendarDateItem[] = []

        let previousMonth = [...Array(monthStartDay)]
        previousMonth.map((day, index) => {
            const calculateDateWithIndex = daysInMonth(month -1, year) - index
            result.push(createCalendarDayItem(month-1, year, calculateDateWithIndex))
        })
        result.sort((a,b) => a.dateFigure - b.dateFigure)
        
        let currentMonth = [...Array(daysInCurrentMonth).keys()]
        currentMonth.map((day, index) => result.push(createCalendarDayItem(month, year, index)))

        let upcomingMonth = [...Array( 7 - result.length % 7)]
        upcomingMonth.map((day, index) => result.push(createCalendarDayItem(month +1, year, index +1)))


        return result
    };



    return (
        <main className='container'>
            <hgroup>
                <h2>{gregorianCalendarMonths[month]}</h2>
                <h3>{year}</h3>
            </hgroup>
            <article role='week_schedule'>
                <header style={{ overflow: 'visible' }}>
                    <div className='grid'>
                        {weekDays.map((day) => (
                            <span key={day} title={day} data-tooltip={day}>
                                {day.substring(0, 1)}
                            </span>
                        ))}
                    </div>
                </header>

                <div className='grid grid_date'>
                    {calendarDays().map(({date, dateFigure, isToday, label, isPast}) => {
                   
                        return(
                        <div key={date.toDateString()} data-tooltip={date.toLocaleDateString()}>
                            <span role='button' className={isToday ? 'primary' : isPast ? 'outline' : 'secondary'}>
                                {dateFigure}
                            </span>
                        </div>
                    )}
                    )}
                </div>

                <details>
                    <summary></summary>
                    Pick your preferred time
                    <form className='grid'>
                        {scheduleSlots.map((item) => (
                            <DaySelectionItem key={item.id} {...item} />
                        ))}
                    </form>
                </details>
            </article>
        </main>
    );
}
