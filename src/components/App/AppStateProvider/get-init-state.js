import initState from './init-state.js'
import loadState from './load-state'

export default function () {
    const savedState = loadState()

    const state = {
        ...initState,
        ...savedState,
    }

    if (state.firstVisit) {
        state.page = 'settings'
    }
    else {
        state.page = 'dashboard'
    }

    return state
}
