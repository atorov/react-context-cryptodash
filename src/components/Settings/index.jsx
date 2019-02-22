import React from 'react'

import CoinGrid from './CoinGrid'
import ConfirmButton from './ConfirmButton'
import Search from './Search'
import WelcomeMessage from './WelcomeMessage'

import Page from '../Shared/Page'

export default function () {
    return (
        <Page name="settings">
            <WelcomeMessage />
            <CoinGrid topSection />
            <ConfirmButton />
            <Search />
            <CoinGrid />
        </Page>
    )
}
