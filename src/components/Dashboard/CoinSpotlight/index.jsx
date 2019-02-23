import React, { useContext } from 'react'

import styled from 'styled-components'

import { AppStateContext } from '../../App/AppStateProvider'
import CoinImage from '../../Shared/CoinImage'
import { Tile } from '../../Shared/Tile'

const StyledSpotlightName = styled.h2`
    text-align: center;
`

export default function () {
    const {
        coinList,
        currentFavorite,
    } = useContext(AppStateContext)

    const currFavoriteObject = coinList.data[currentFavorite]

    return (
        <Tile>
            <StyledSpotlightName>
                {currFavoriteObject.CoinName}
            </StyledSpotlightName>
            <CoinImage
                coin={currFavoriteObject}
                spotlight
            />
        </Tile>
    )
}
