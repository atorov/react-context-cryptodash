import React, { useContext } from 'react'

import styled from 'styled-components'

import { AppStateContext } from '../../App/AppStateProvider'
import CoinTile from '../CoinTile'

const StyledCoinGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
    grid-gap: 15px;
    margin-top: 40px;
`

export default function ({ topSection }) {
    const {
        favorites,
        filteredCoins,
    } = useContext(AppStateContext)

    return (
        <StyledCoinGrid>
            {(topSection ? favorites : Object.keys(filteredCoins))
                .map((coinKey) => {
                    return (
                        <CoinTile
                            key={coinKey}
                            coinKey={coinKey}
                            topSection={topSection}
                        />
                    )
                })
            }
        </StyledCoinGrid>
    )
}
