import { useEffect, useState } from 'react'

import _ from 'lodash'

import fetchCoinHistorical from '../api/fetch-coin-historical'

const getCoinHistorical = _.throttle(
    (currentFavorite, currency, timeUnits, timeInterval, t, setCoinHistorical) => {
        fetchCoinHistorical(currentFavorite, currency, timeUnits, timeInterval, t)
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

export default function (currentFavorite, timeUnits, timeInterval) {
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
            getCoinHistorical(currentFavorite, ['USD'], timeUnits, timeInterval, 550, setCoinHistorical)
        },
        [currentFavorite, timeInterval],
    )

    return coinHistorical
}
