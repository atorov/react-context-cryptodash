import React from 'react'

import Content from '../Shared/Content'

import AppBar from './AppBar'
import AppLayout from './AppLayout'
import { AppStateProvider } from './AppStateProvider'
import Dashboard from '../Dashboard'
import ErrorBoundary from '../ErrorBoundary'
import Settings from '../Settings'


import './index.css'

class App extends React.Component {
    render() {
        return (
            <ErrorBoundary>
                <AppStateProvider>
                    <AppLayout>
                        <AppBar />
                        <Content>
                            <Settings />
                            <Dashboard />
                        </Content>
                    </AppLayout>
                </AppStateProvider>
            </ErrorBoundary>
        )
    }
}

export default App
