import React, {
    useContext,
    useEffect,
} from 'react'

import styled from 'styled-components'

import useCoinPrices from '../../hooks/use-coin-prices'

import {
    AppDispatchContext,
    AppStateContext,
} from '../App/AppStateProvider'
import Page from '../Shared/Page'

import CoinSpotlight from './CoinSpotlight'
import PriceChart from './PriceChart'
import PriceGrid from './PriceGrid'

export default function () {
    const {
        coinList,
        favorites,
        page,
        prices,
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

    const isReady = page === 'dashboard' && coinList.status === ':READY:' && prices.status === ':READY:'

    const StyledChartGrid = styled.div`
        display: grid;
        margin-top: 20px;
        grid-gap: 15px;
        grid-template-columns: 1fr 3fr;
    `

    return (
        <Page name={isReady && 'dashboard'}>
            <PriceGrid />
            <StyledChartGrid>
                <CoinSpotlight />
                <PriceChart />
            </StyledChartGrid>
        </Page>
    )
}
