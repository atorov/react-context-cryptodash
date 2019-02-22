import delay from '../lib/delay'

const cc = require('cryptocompare')

export default async function fetchCoinList(t = 0) {
    let coinList = {}
    try {
        await delay(t)
        coinList = await cc.coinList()
    } catch (reason) {
        console.log('::: reason:', reason)
    }

    return coinList
}
