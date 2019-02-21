import React, { useContext } from 'react'

import { AppStateContext } from '../../App/AppStateProvider'

export default function () {
    const { firstVisit } = useContext(AppStateContext)

    return (
        firstVisit ? (
            <div>
                Welcome to CryptoDash, please select your favorite coins to begin
            </div >
        ) : null
    )
}
