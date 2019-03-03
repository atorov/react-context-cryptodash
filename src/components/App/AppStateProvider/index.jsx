import React, { useEffect, useReducer, useRef } from 'react'

import getInitState from './get-init-state'
import reducer from './reducer'
import saveState from './save-state'

const initState = getInitState()

export const AppDispatchContext = React.createContext(() => { })
export const AppStateContext = React.createContext(initState)

export function AppStateProvider(props) {
    const isMountedRef = useRef(false)

    const [state, dispatch] = useReducer(reducer, initState)
    // console.log('::: App.state:', state)

    useEffect(
        () => {
            if (isMountedRef.current) {
                saveState(state)
            }
        },
        [state],
    )

    useEffect(
        () => {
            isMountedRef.current = true
            return () => isMountedRef.current = false
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
