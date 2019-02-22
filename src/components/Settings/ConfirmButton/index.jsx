import React, { useContext } from 'react'

import styled from 'styled-components'

import { AppDispatchContext } from '../../App/AppStateProvider'

import * as styles from '../../Shared/styles'

const CenterDiv = styled.div`
    display: grid;
    justify-content: center;
`

const StyledConfirmButton = styled.div`
    margin: 20px;
    color: ${styles.color3};
    ${styles.fontSize1}
    padding: 5px;
    cursor: pointer;
    &:hover {
        ${styles.greenBoxShadow}
    }
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
