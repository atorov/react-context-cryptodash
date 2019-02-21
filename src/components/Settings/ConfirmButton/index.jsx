import React, { useContext } from 'react'

import styled from 'styled-components'

import { AppDispatchContext } from '../../App/AppStateProvider'

const CenterDiv = styled.div`
    display: grid;
    justify-content: center;
`

const StyledConfirmButton = styled.div`
    margin: 20px;
    color: green;
    cursor: pointer;
`

export default function () {
    const dispatch = useContext(AppDispatchContext)

    return (
        <CenterDiv>
            <StyledConfirmButton onClick={() => dispatch({ type: ':CONFIRM_FAVORITES:' })}>
                Confirm Favorites
            </StyledConfirmButton>
        </CenterDiv>
    )
}
