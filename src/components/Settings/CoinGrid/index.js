import React, { useContext } from 'react'

import styled from 'styled-components'

import { AppStateContext } from '../../App/AppStateProvider'
import CoinTile from '../CoinTile'

const StyledCoinGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 15px;
    margin-top: 40px;
`

function getCoinsToDisplay(data = {}, topSection) {
    return Object.keys(data).slice(0, topSection ? 10 : 100)
}

export default function ({ topSection }) {
    const { coinList: { data } } = useContext(AppStateContext)

    return (
        <StyledCoinGrid>
            {getCoinsToDisplay(data, topSection).map((coinKey) => {
                return (
                    <CoinTile
                        key={coinKey}
                        coinKey={coinKey}
                        topSection={topSection}
                    />
                )
            })}
        </StyledCoinGrid>
    )
}
