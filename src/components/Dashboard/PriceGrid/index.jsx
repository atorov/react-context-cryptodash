import React, { useContext } from 'react'

import styled from 'styled-components'

import { AppStateContext } from '../../App/AppStateProvider'

import PriceTile from '../PriceTile'

const StyledPriceGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 15px;
    margin-top: 40px;
`

export default function () {
    const { prices: { data } } = useContext(AppStateContext)

    return (
        <StyledPriceGrid>
            {data.map((price, index) => (
                <PriceTile
                    key={Object.keys(price)[0]}
                    price={price}
                    index={index}
                />
            ))}
        </StyledPriceGrid>
    )
}
