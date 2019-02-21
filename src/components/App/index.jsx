import React from 'react'

import AppBar from './AppBar'
import AppLayout from './AppLayout'
import { AppStateProvider } from './AppStateProvider'

import './index.css'

class App extends React.Component {
    render() {
        return (
            <AppStateProvider>
                <AppLayout>
                    <AppBar />
                    App
                </AppLayout>
            </AppStateProvider>
        )
    }
}

export default App
