import { daysInMonth, gregorianCalendarMonths, monthStartsOnDayOfWeek, weekDays, createCalendarDayItem } from './shared/constants';
import { scheduleSlots } from './shared/mocks';
import './shared/calendar.styles.css';
import { useState } from 'react';

interface CalendarProps {
    monthOfYear?: number // 0-index based as in js Date
}

export default function Calendar({ monthOfYear }: CalendarProps) {
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
        now = new Date(),
        month = now.getMonth(),
        year = now.getFullYear(),
        day = now.getDate(),
        daysInCurrentMonth = daysInMonth(month, year),
        monthStartDay = monthStartsOnDayOfWeek(month, year)

 
    const calendarDays = () => {
        let result: any[] = []

        let previousMonth = [...Array(monthStartDay)]
        previousMonth.map((day, index) => result.push(daysInMonth(month -1, year) - index))
        result.sort((a,b) => a-b)
        
        let currentMonth = [...Array(daysInCurrentMonth).keys()]
        currentMonth.map((day, index) => result.push(index))

        console.log(result.length % 7)

        let upcomingMonth = [...Array( 7 - result.length % 7)]
        upcomingMonth.map((day, index) => result.push(createCalendarDayItem(year, month +1, index +1).dateFigure))


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
                    {calendarDays().map((item) => {

                        console.log(item +1)
                        return(
                        <div key={item}>
                            <span role='button' className='secondary'>
                                {item +1}
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
