import React, {
    useContext,
    useEffect,
    useState,
} from 'react'

import _ from 'lodash'
import styled from 'styled-components'

import { AppDispatchContext, AppStateContext } from '../../App/AppStateProvider'
import * as styles from '../../Shared/styles'

import getFilterCoins from './get-filtered-coins'

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

const handleTermChange = _.debounce(
    (event, setTerm) => setTerm(event.target.value),
    550,
)

export default function () {
    const dispatch = useContext(AppDispatchContext)
    const { coinList } = useContext(AppStateContext)

    const [term, setTerm] = useState('')

    useEffect(
        () => {
            let filteredCoins = {}
            if (term || term === 0) {
                filteredCoins = getFilterCoins(term, coinList)
            }
            else if (coinList && coinList.data) {
                const data = coinList.data
                Object.keys(data)
                    .slice(0, 100)
                    .map(key => filteredCoins[key] = data[key])
            }
            dispatch({
                type: ':SET_FILTERED_COINS:',
                payload: { filteredCoins },
            })
        },
        [term],
    )

    return (
        <StyledSearchGrid>
            <h2>Search all coins</h2>
            <StyledSearchInput onChange={event => {
                event.persist()
                handleTermChange(event, setTerm)
            }} />
        </StyledSearchGrid>
    )
}
