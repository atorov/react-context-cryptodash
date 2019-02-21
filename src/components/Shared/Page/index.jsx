import React, { useContext } from 'react'

import { AppStateContext } from '../../App/AppStateProvider'

export default function ({ children, name }) {
    const { page } = useContext(AppStateContext)

    if (page !== name) {
        return null
    }

    return (
        <>
            {children}
        </>
    )
}
