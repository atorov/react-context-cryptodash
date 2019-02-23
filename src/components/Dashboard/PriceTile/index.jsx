import React, { useContext } from 'react'

import styled, { css } from 'styled-components'

import {
    AppDispatchContext,
    AppStateContext,
} from '../../App/AppStateProvider'
import { StyledCoinHeaderGrid } from '../../Settings/CoinHeaderGrid'
import * as styles from '../../Shared/styles'
import { SelectableTile } from '../../Shared/Tile'

import numberFormat from './number-format'

const StyledChangePct = styled.div`
    color: ${props => props.red ? 'red' : 'green'};
`

const StyledJustifyLeft = styled.div`
    justify-self: left;
`

const StyledJustifyRight = styled.div`
    justify-self: right;
`

const cssStyledPriceTileCurrFav = css`
    ${styles.greenBoxShadow}
    pointer-events: none;
`

const cssStyledPriceTileCompact = css`
    display: grid;
    ${styles.fontSize3}
    grid-gap: 5px;
    grid-template-columns: repeat(3, 1fr);
    justify-items: right;
`

const StyledPriceTile = styled(SelectableTile)`
    ${props => props.compact && cssStyledPriceTileCompact}
    ${props => props.currentFavorite && cssStyledPriceTileCurrFav}
`

const StyledTickerPrice = styled.div`
    ${styles.fontSizeBig}
`

function ChangePercent({ data }) {
    return (
        <StyledJustifyRight>
            <StyledChangePct red={data.CHANGEPCT24HOUR < 0}>
                {numberFormat(data.CHANGEPCT24HOUR)}
            </StyledChangePct>
        </StyledJustifyRight>
    )
}

function PriceTile({ sym, data, currentFavorite, handleClick }) {
    return (
        <StyledPriceTile
            currentFavorite={currentFavorite}
            onClick={handleClick}
        >
            <StyledCoinHeaderGrid>
                <div>{sym}</div>
                <ChangePercent data={data} />
            </StyledCoinHeaderGrid>
            <StyledTickerPrice>
                ${numberFormat(data.PRICE)}
            </StyledTickerPrice>
        </StyledPriceTile>
    )
}

function PriceTileCompact({ sym, data, currentFavorite, handleClick }) {
    return (
        <StyledPriceTile
            compact
            currentFavorite={currentFavorite}
            onClick={handleClick}
        >
            <StyledJustifyLeft>
                {sym}
            </StyledJustifyLeft>
            <ChangePercent data={data} />
            <div>${numberFormat(data.PRICE)}</div>
        </StyledPriceTile>
    )
}

export default function ({ price, index }) {
    const dispatch = useContext(AppDispatchContext)
    const { currentFavorite } = useContext(AppStateContext)

    const sym = Object.keys(price)[0]
    const data = price[sym]['USD']

    const TileClass = index < 5 ? PriceTile : PriceTileCompact

    return (
        <TileClass
            sym={sym}
            data={data}
            currentFavorite={currentFavorite === sym}
            handleClick={() => dispatch({
                type: ':SET_CURRENT_FAVORITE:',
                payload: { currentFavorite: sym }
            })}
        />
    )
}
