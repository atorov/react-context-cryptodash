import React, {
    useContext,
    useEffect,
} from 'react'

import moment from 'moment'
import styled from 'styled-components'

import useCoinHistorical from '../../hooks/use-coin-historical'
import useCoinPrices from '../../hooks/use-coin-prices'

import {
    AppDispatchContext,
    AppStateContext,
} from '../App/AppStateProvider'
import Page from '../Shared/Page'

import CoinSpotlight from './CoinSpotlight'
import PriceChart from './PriceChart'
import PriceGrid from './PriceGrid'

const TIME_UNITS = 12

export default function () {
    const {
        coinList,
        currentFavorite,
        favorites,
        historical,
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

    const coinHistorical = useCoinHistorical(currentFavorite, TIME_UNITS)
    useEffect(
        () => {
            if (coinHistorical && coinHistorical.data) {
                const payloadStatus = coinHistorical.status;
                const payloadData = [
                    {
                        name: currentFavorite,
                        data: coinHistorical.data.map((thicker, index) => ([
                            moment().subtract({ months: TIME_UNITS - index }).valueOf(),
                            thicker.USD,
                        ])),
                    },
                ]
                dispatch({
                    type: ':SET_HISTORICAL:',
                    payload: {
                        historical: {
                            status: payloadStatus,
                            data: payloadData,
                        },
                    },
                })
            }
        },
        // [coinHistorical],
        [coinHistorical, currentFavorite],
    )

    const isReady = page === 'dashboard'
        && coinList.status === ':READY:'
        && prices.status === ':READY:'
        && (historical.status === ':READY:' || historical.status === ':LOADING:')

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
