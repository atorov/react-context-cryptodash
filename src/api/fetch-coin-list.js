const cc = require('cryptocompare')

export default async function fetchCoinList() {
    let coinList = {}
    try {
        coinList = await cc.coinList()
    } catch (reason) {
        console.log('::: reason:', reason)
    }

    return coinList
}
