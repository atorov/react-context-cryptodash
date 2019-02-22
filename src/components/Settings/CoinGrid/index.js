import React, { useContext } from 'react'

import styled from 'styled-components'

import { AppStateContext } from '../../App/AppStateProvider'

import { SelectableTile } from '../../Shared/Tile'

const StyledCoinGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 15px;
`
export default function () {
    const { coinList: { data } } = useContext(AppStateContext)

    return (
        <StyledCoinGrid>
            {data && Object.keys(data).map((coinKey) => {
                return (
                    <SelectableTile key={coinKey}>
                        {coinKey}
                    </SelectableTile>
                )
            })}
        </StyledCoinGrid>
    )
}
