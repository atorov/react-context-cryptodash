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
                dispatch({
                    type: ':SET_COIN_PRICES:',
                    payload: { prices: coinPrices },
                })
            }
        },
        [coinPrices],
    )

    const isReady = page === 'dashboard' && prices.status === ':READY:'

    return (
        <Page name={isReady && 'dashboard'}>
            Dashboard...
        </Page>
    )
}
