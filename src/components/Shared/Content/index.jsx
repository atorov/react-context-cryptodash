import React, { useContext } from 'react'

import { AppStateContext } from '../../App/AppStateProvider'

export default function (props) {
    const {
        coinList,
        historical,
        page,
        prices,
    } = useContext(AppStateContext)

    return (
        <>
            {page === 'settings' && coinList.status !== ':READY:' ? 'Loading Coins ...' : null}
            {page === 'dashboard'
                && (
                    coinList.status !== ':READY:'
                    || prices.status !== ':READY:'
                    || (
                        historical.status !== ':READY:'
                        && historical.status !== ':LOADING:'
                    )
                ) ? 'Loading Prices ...' : null
            }
            {props.children}
        </>
    )
}
