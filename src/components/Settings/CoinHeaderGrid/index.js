import React from 'react'

import styled from 'styled-components'

const StyledCoinHeaderGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`

const StyledCoinSymbol = styled.div`
    justify-self: right;
`

export default function ({ CoinName: name, Symbol: symbol }) {
    return (
        <StyledCoinHeaderGrid>
            <div>{name}</div>
            <StyledCoinSymbol>{symbol}</StyledCoinSymbol>
        </StyledCoinHeaderGrid>
    )
}
