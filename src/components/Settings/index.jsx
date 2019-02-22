import React, {
    useContext,
    useEffect,
} from 'react'

import useCoinList from '../../hooks/use-coin-list'

import {
    AppDispatchContext,
    AppStateContext,
} from '../App/AppStateProvider'
import Page from '../Shared/Page'

import CoinGrid from './CoinGrid'
import ConfirmButton from './ConfirmButton'
import Search from './Search'
import WelcomeMessage from './WelcomeMessage'

export default function () {
    const {
        coinList: coinListFromAppState,
        page,
    } = useContext(AppStateContext)
    const dispatch = useContext(AppDispatchContext)

    const coinList = useCoinList()

    useEffect(
        () => {
            if (coinList && coinList.data) {
                dispatch({
                    type: ':SET_COIN_LIST:',
                    payload: { coinList },
                })
            }
        },
        [coinList],
    )

    const isReady = page === 'settings' && coinListFromAppState.status === ':READY:'

    return (
        <Page name={isReady && 'settings'}>
            <WelcomeMessage />
            <CoinGrid topSection />
            <ConfirmButton />
            <Search />
            <CoinGrid />
        </Page>
    )
}
