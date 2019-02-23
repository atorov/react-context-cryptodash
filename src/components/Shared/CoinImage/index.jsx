import React from 'react'

import styled, { css } from 'styled-components'

const StyledCoinImage = styled.img`
    display: block;
    height: 50px;
    margin: auto;
    ${props => props.spotlight && css`height: 200px;`}
`

export default function ({ coin, spotlight }) {
    return (
        <StyledCoinImage
            alt={coin.CoinSymbol}
            spotlight={spotlight}
            src={`http://cryptocompare.com/${coin.ImageUrl}`}
        />
    )
}
