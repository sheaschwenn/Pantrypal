const dayjs = require('dayjs')

module.exports = {
format_date: (date) => {
    return dayjs(date).format('MM/DD/YYYY')
},

expiration_date: (date_bought, daysUntilExpiration) => {
    return dayjs(date_bought).add(daysUntilExpiration, 'day').format('MM/DD/YYYY')
},

days_until_expiration : (date_bought, daysUntilExpiration) => {
    const expirationDate =  dayjs(date_bought).add(daysUntilExpiration, 'day').format('MM/DD/YYYY');

    const currentDate = dayjs();
    const daysLeft = dayjs(expirationDate).diff(currentDate, 'day');

    return daysLeft
},
}