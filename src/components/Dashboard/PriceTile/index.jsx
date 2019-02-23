import React from 'react'

import styled, { css } from 'styled-components'

import * as styles from '../../Shared/styles'
import { SelectableTile } from '../../Shared/Tile'

const StyledPriceTile = styled(SelectableTile)`
    ${props => props.compact && css`${styles.fontSize3}`}
`

export default function ({ price, index }) {
    const sym = Object.keys(price)[0]
    const data = price[sym]['USD']

    return (
        <StyledPriceTile compact={index >= 5}>
            {sym}: {data.PRICE}
        </StyledPriceTile>
    )
}
