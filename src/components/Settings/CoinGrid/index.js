import React, { useContext } from 'react'

import styled from 'styled-components'

import { AppStateContext } from '../../App/AppStateProvider'

const StyledCoinGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr)
`
export default function () {
    const { coinList: { data } } = useContext(AppStateContext)

    return (
        <StyledCoinGrid>
            {data && Object.keys(data).map((coinKey) => {
                return (
                    <div key={coinKey}>
                        {coinKey}
                    </div>
                )
            })}
        </StyledCoinGrid>
    )
}
