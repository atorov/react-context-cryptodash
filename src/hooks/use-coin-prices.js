import { useEffect, useState } from 'react'

import _ from 'lodash'

import fetchCoinPrices from '../api/fetch-coin-prices'

const getCoinPrices = _.throttle(
    (favorites, currency, t, setCoinPrices) => {
        fetchCoinPrices(favorites, currency, t)
            .then(res => {
                if (res) {
                    setCoinPrices({
                        status: ':READY:',
                        data: res,
                    })
                }
                else {
                    setCoinPrices((prevState) => ({
                        ...prevState,
                        status: ':ERROR:',
                    }))
                }
            })
    },
    550,
    { 'leading': false },
)

export default function (favorites = []) {
    const [coinPrices, setCoinPrices] = useState({
        status: '',
        data: {},
    })

    useEffect(
        () => {
            getCoinPrices(favorites, undefined, 550, setCoinPrices)
        },
        [favorites],
    )

    return coinPrices
}
