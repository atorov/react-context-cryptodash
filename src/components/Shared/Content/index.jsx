import React, { useContext } from 'react'

import { AppStateContext } from '../../App/AppStateProvider'

export default function (props) {
    const { coinList } = useContext(AppStateContext)

    if (coinList.status !== ':READY:') {
        return (
            <div>
                Loading Coins ...
            </div>
        )
    }

    return (
        <div>
            {props.children}
        </div>
    )
}
