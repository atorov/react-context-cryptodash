import { useEffect, useState } from 'react'

import _ from 'lodash'

import fetchCoinHistorical from '../api/fetch-coin-historical'

const getCoinHistorical = _.throttle(
    (currentFavorite, currency, timeUnits, t, setCoinHistorical) => {
        fetchCoinHistorical(currentFavorite, currency, timeUnits, t)
            .then(res => {
                if (res) {
                    setCoinHistorical({
                        status: ':READY:',
                        data: res,
                    })
                }
                else {
                    setCoinHistorical((prevState) => ({
                        ...prevState,
                        status: ':ERROR:',
                    }))
                }
            })
    },
    550,
    { 'leading': false },
)

export default function (currentFavorite, timeUnits) {
    const [coinHistorical, setCoinHistorical] = useState({
        status: '',
        data: [],
    })

    useEffect(
        () => {
            setCoinHistorical({
                status: ':LOADING:',
                data: [],
            })
            getCoinHistorical(currentFavorite, ['USD'], timeUnits, 550, setCoinHistorical)
        },
        [currentFavorite],
    )

    return coinHistorical
}
