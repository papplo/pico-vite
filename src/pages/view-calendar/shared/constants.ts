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
    return new Date(year, month, 0).getDay()
}


export function createCalendarDayItem(month: number, year: number, day: number) {
    const calendarDate = new Date(year, month, day)
    return {
        date: calendarDate,
        label: weekDays[calendarDate.getDay()],
        dateFigure: calendarDate.getDate() -1,
        // isToday: calendarDate === new Date()
    }
}