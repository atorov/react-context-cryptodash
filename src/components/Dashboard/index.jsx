import React, {
    useContext,
    useEffect,
} from 'react'

import useCoinPrices from '../../hooks/use-coin-prices'

import {
    AppDispatchContext,
    AppStateContext,
} from '../App/AppStateProvider'
import Page from '../Shared/Page'

import PriceGrid from './PriceGrid'

export default function () {
    const {
        prices,
        favorites,
        page,
    } = useContext(AppStateContext)
    const dispatch = useContext(AppDispatchContext)

    const coinPrices = useCoinPrices(favorites)

    useEffect(
        () => {
            if (coinPrices && coinPrices.data) {
                const payloadStatus = coinPrices.status;
                const payloadData = []
                for (const key in coinPrices.data) {
                    if (coinPrices.data.hasOwnProperty(key)) {
                        payloadData.push({ [key]: coinPrices.data[key] })
                    }
                }
                dispatch({
                    type: ':SET_COIN_PRICES:',
                    payload: {
                        prices: {
                            status: payloadStatus,
                            data: payloadData,
                        },
                    },
                })
            }
        },
        [coinPrices],
    )

    const isReady = page === 'dashboard' && prices.status === ':READY:'

    return (
        <Page name={isReady && 'dashboard'}>
            <PriceGrid />
        </Page>
    )
}
