import moment from 'moment'

import delay from '../lib/delay'

const cc = require('cryptocompare')

export default async function (
    currentFavorite = 'BTC',
    currency = ['USD'],
    timeUnits = 10,
    timeInterval = 'months',
    t = 0
) {
    let coinHistorical = {}
    try {
        await delay(t)
        const promises = []
        for (let i = timeUnits; i >= 0; i--) {
            promises.push(cc.priceHistorical(
                currentFavorite,
                currency,
                moment().subtract({ [timeInterval]: i }).toDate()
            ))
            await delay(100)
        }
        coinHistorical = await Promise.all(promises)
    } catch (reason) {
        console.log('::: reason:', reason)
    }

    return coinHistorical
}
