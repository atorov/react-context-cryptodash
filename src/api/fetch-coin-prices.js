import delay from '../lib/delay'

const cc = require('cryptocompare')

export default async function (coins = ['BTC'], currency = 'USD', t = 0) {
    let coinPrices = {}
    try {
        await delay(t)
        coinPrices = await cc.priceFull(coins, currency)
    } catch (reason) {
        console.log('::: reason:', reason)
    }

    return coinPrices
}
