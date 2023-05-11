const dayjs = require('dayjs')

module.exports = {
format_date: (date) => {
    return dayjs(date).format('MM/DD/YYYY')
},

expiration_date: (date_bought, daysUntilExpiration) => {
    return dayjs(date_bought).add(daysUntilExpiration, 'day').format('MM/DD/YYYY')
},


}