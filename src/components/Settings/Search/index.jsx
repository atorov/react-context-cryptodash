import React from 'react'

import styled from 'styled-components'

import * as styles from '../../Shared/styles'

const StyledSearchGrid = styled.div`
    display: grid;
    grid-template-columns: 200px 1fr;
`

const StyledSearchInput = styled.input`
    ${styles.backgroundColor2}
    ${styles.fontSize2}
    border: 1px solid;
    height: 25px;
    color: #1163c9;
    justify-self: left;
    align-self: center;
`

export default function () {
    return (
        <StyledSearchGrid>
            <h2>Search all coins</h2>
            <StyledSearchInput />
        </StyledSearchGrid>
    )
}
