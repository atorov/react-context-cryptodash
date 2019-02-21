import React, { useReducer } from 'react'

const initState = {
    page: 'dashboard',
}

export const AppDispatchContext = React.createContext(() => { })
export const AppStateContext = React.createContext(initState)

function reducer(state, action) {
    switch (action.type) {
        case ':SET_PAGE:':
            return {
                ...state,
                page: action.payload.page,
            }

        default:
            // throw new Error('Action type does not match!')
            return state
    }
}

export function AppStateProvider(props) {
    const [state, dispatch] = useReducer(reducer, initState)

    return (
        <AppStateContext.Provider value={state}>
            <AppDispatchContext.Provider value={dispatch}>
                {props.children}
            </AppDispatchContext.Provider>
        </AppStateContext.Provider>
    )
}
