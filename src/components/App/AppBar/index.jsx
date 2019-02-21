import React, { useContext } from 'react'

import styled from 'styled-components'

import { AppDispatchContext, AppStateContext } from '../AppStateProvider'

const Bar = styled.div`
    display: grid;
    margin-bottom: 40px;
    grid-template-columns: 180px auto 100px 100px;
`

const ControlButtonElem = styled.div`
    text-shadow: ${({ active }) => active && '0 0 60px #03ff03'};
    cursor: pointer;
`

const Logo = styled.div`
    font-size: 1.5em;
`

function toProperCase(str) {
    return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase()
}

function ControlButton({ name }) {
    const dispatch = useContext(AppDispatchContext)
    const { page } = useContext(AppStateContext)

    return (
        <ControlButtonElem
            active={page === name}
            onClick={() => dispatch({
                type: ':SET_PAGE:',
                payload: { page: name },
            })}
        >
            {toProperCase(name)}
        </ControlButtonElem>
    )
}

export default function () {
    return (
        <Bar>
            <Logo>CryptoDash</Logo>
            <div />
            <ControlButton name="dashboard" />
            <ControlButton name="settings" />
        </Bar>
    )
}
