export const gregorianCalendarMonths = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

export const weekDays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
];

export function daysInMonth(month: number, year: number) {
    return new Date(year, month, 0).getDate()
}
export function monthStartsOnDayOfWeek(month: number, year: number) {
    return new Date(year, month, -1).getDay()
}

export function relativeDate(dateNow: Date, dateToCheck: Date) {
    const isToday = dateNow.toDateString() === dateToCheck.toDateString()
    const isPast = dateNow.getTime() > dateToCheck.getTime() && !isToday
    
    return {
        isToday,
        isPast
    }
}

export type CalendarDateItem = {
    date: Date,
    label: string,
    dateFigure: number,
    isToday: boolean,
    isPast: boolean
}
export function createCalendarDayItem(month: number, year: number, day: number): CalendarDateItem {
    const calendarDate = new Date(year, month, day)

    return {
        date: calendarDate,
        label: weekDays[calendarDate.getDay()],
        dateFigure: calendarDate.getDate(),
        ...relativeDate(new Date(), calendarDate)
    }
}