import React, { useContext } from 'react'

import { AppStateContext } from '../../App/AppStateProvider'

export default function (props) {
    const {
        coinList,
        page,
        prices,
    } = useContext(AppStateContext)

    return (
        <>
            {page === 'settings' && coinList.status !== ':READY:' ? 'Loading Coins ...' : null}
            {page === 'dashboard' && prices.status !== ':READY:' ? 'Loading Prices ...' : null}
            {props.children}
        </>
    )
}
