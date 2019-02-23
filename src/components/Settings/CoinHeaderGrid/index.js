import React from 'react'

import styled from 'styled-components'

import { DeletableTile } from '../../Shared/Tile';

export const StyledCoinHeaderGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`

const StyledCoinSymbol = styled.div`
    justify-self: right;
`

const DeleteIcon = styled.div`
    justify-self: right;
    display: none;
    ${DeletableTile}:hover & {
        display: block;
        color: red;
    }
`

export default function ({
    CoinName: name,
    Symbol: symbol,
    topSection,
}) {
    return (
        <StyledCoinHeaderGrid>
            <div>{name}</div>
            {topSection
                ? <DeleteIcon>X</DeleteIcon>
                : <StyledCoinSymbol>{symbol}</StyledCoinSymbol>
            }
        </StyledCoinHeaderGrid>
    )
}
