import React from 'react'

import styled from 'styled-components'

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

function ControlButton({ active, name }) {
    return (
        <ControlButtonElem active={active}>
            {toProperCase(name)}
        </ControlButtonElem>
    )
}

export default function () {
    return (
        <Bar>
            <Logo>CryptoDash</Logo>
            <div />
            <ControlButton active name="dashboard" />
            <ControlButton name="settings" />
        </Bar>
    )
}
