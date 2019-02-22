import _ from 'lodash'
import fuzzy from 'fuzzy'

export default function (term, coinList) {
    if (coinList && coinList.data) {
        const data = coinList.data
        const coinSymbols = Object.keys(data)
        const coinNames = coinSymbols.map(sym => data[sym].CoinName)
        const allStringToSearch = [...coinSymbols, ...coinNames]
        const fuzzyResults = fuzzy
            .filter(term, allStringToSearch, {})
            .map(result => result.string)
        const filteredCoins = _.pickBy(data, (result, symKey) => {
            const coinName = result.CoinName
            return fuzzyResults.includes(symKey) || fuzzyResults.includes(coinName)
        })

        return filteredCoins
    }
    return {}
}
