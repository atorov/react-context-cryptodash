import React, { useEffect, useReducer, useRef } from 'react'

import _ from 'lodash'

const cc = require('cryptocompare')

const initState = getInitState()

export const AppDispatchContext = React.createContext(() => { })
export const AppStateContext = React.createContext(initState)

async function fetchCoinList() {
    let coinList = {}
    try {
        coinList = await cc.coinList()
    } catch (reason) {
        console.log('::: reason:', reason)
    }

    return coinList
}

function reducer(state, action) {
    switch (action.type) {
        case ':CONFIRM_FAVORITES:':
            return {
                ...state,
                firstVisit: false,
                page: 'dashboard',
            }

        case ':SET_COIN_LIST:':
            return {
                ...state,
                coinList: action.payload.coinList,
            }

        case ':SET_PAGE:':
            return {
                ...state,
                page: action.payload.page,
            }

        default:
            throw new Error('Action type does not match!')
        // return state
    }
}

function getInitState() {
    let savedState = {}
    try {
        const serialized = window.localStorage.getItem('cryptoDash')
        if (serialized) {
            savedState = JSON.parse(serialized)
        }
    } catch (reason) {
        console.error('::: Load state from the local storage failed with reason:', reason)
    }

    return {
        coinList: {},
        firstVisit: true,
        page: 'settings',
        ...savedState,
    }
}

const saveState = _.throttle(
    (state) => {
        try {
            const serialized = JSON.stringify(state)
            window.localStorage.setItem('cryptoDash', serialized)
            console.log('::: State has been saved to the local storage')
        } catch (reason) {
            console.error('::: Save state in the local storage failed with reason:', reason)
        }
    },
    550,
    { 'leading': false },
)

export function AppStateProvider(props) {
    const isMountedRef = useRef(false)

    const [state, dispatch] = useReducer(reducer, initState)

    useEffect(
        () => {
            if (isMountedRef.current) {
                saveState(state)
            }
            else {
                isMountedRef.current = true
            }
        },
        [state],
    )

    useEffect(() => () => isMountedRef.current = false, [])

    useEffect(
        () => {
            (async () => {
                const coinList = await fetchCoinList()
                if (coinList && coinList.Data && isMountedRef.current) {
                    dispatch({
                        type: ':SET_COIN_LIST:',
                        payload: { coinList: coinList.Data },
                    })
                }
            })()
        },
        [],
    )

    return (
        <AppStateContext.Provider value={state}>
            <AppDispatchContext.Provider value={dispatch}>
                {props.children}
            </AppDispatchContext.Provider>
        </AppStateContext.Provider>
    )
}
