import React, { useEffect, useReducer, useRef } from 'react'

import _ from 'lodash'

const initState = getInitState()

export const AppDispatchContext = React.createContext(() => { })
export const AppStateContext = React.createContext(initState)

function reducer(state, action) {
    switch (action.type) {
        case ':CONFIRM_FAVORITES:':
            return {
                ...state,
                firstVisit: false,
                page: 'dashboard',
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
            isMountedRef.current
                ? saveState(state)
                : isMountedRef.current = true
        },
        [state],
    )

    // useEffect(() => () => isMountedRef.current = false, [])

    return (
        <AppStateContext.Provider value={state}>
            <AppDispatchContext.Provider value={dispatch}>
                {props.children}
            </AppDispatchContext.Provider>
        </AppStateContext.Provider>
    )
}
