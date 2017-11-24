import moment from 'moment'

export const genCalendarObj = (from, to) => {

    let calendar = {
        date:{},
        monthWeekDate:{}
    }
    const fromWd = moment(from).weekday()
    const toWd = moment(to).weekday()
    const fMonth = moment(from).month()
    const tMonth = moment(to).month()
    const tmpFrom = moment(from)
        .subtract(fromWd, 'days')
        .toObject()
    const tmpTo = moment(to)
        .add(6 - toWd, 'days')
        .toObject()

    //define date range
    const start = fromWd === 0
        ? moment(from).toObject()
        : (tmpFrom.months !== fMonth
            ? moment(from).startOf('month').toObject()
            : tmpFrom)
    const end = toWd === 6
        ? moment(to).toObject()
        : (tmpTo.months !== tMonth
            ? moment(to).endOf('month').toObject()
            : tmpTo)

    const days = moment(end).diff(start, 'days')

    for (let j = 0; j <= days; j++) {
        let tmpDay = moment(start)
            .add(j, 'days')
            .toObject()
        if (moment(tmpDay).isSameOrBefore(end)) {
            let disable = false
            let month = moment(tmpDay).month() + 1
            let week = moment(tmpDay).weeks()
            let dateStr = moment(tmpDay).format('YYYY-MM-DD')

            if(!calendar.monthWeekDate.hasOwnProperty(month))
                calendar.monthWeekDate[month] = {}

            if(!calendar.monthWeekDate[month].hasOwnProperty(week)){
                calendar.monthWeekDate[month][week] =[]
            }

            calendar.monthWeekDate[month][week].push(dateStr)

            if (moment(tmpDay).isBefore(from) || moment(tmpDay).isAfter(to)) 
                disable = true


            calendar.date[dateStr] = {
                isDisable: disable,
                year: tmpDay.years,
                month: tmpDay.months + 1,
                day: tmpDay.date,
                dayOfWeek: moment(tmpDay).day(),
                week
            }
        }
    }
    return calendar
}