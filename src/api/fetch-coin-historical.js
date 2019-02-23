import moment from 'moment'

import delay from '../lib/delay'

const cc = require('cryptocompare')

export default async function (
    currentFavorite = 'BTC',
    currency = ['USD'],
    timeUnits = 10,
    t = 0
) {
    let coinHistorical = {}
    try {
        await delay(t)
        const promises = []
        for (let i = 0; i < timeUnits; i++) {
            promises.push(cc.priceHistorical(
                currentFavorite,
                currency,
                moment().subtract({ months: i }).toDate()
            ))
            await delay(100)
        }
        coinHistorical = await Promise.all(promises)
    } catch (reason) {
        console.log('::: reason:', reason)
    }

    return coinHistorical
}
