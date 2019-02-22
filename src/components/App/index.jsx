import React from 'react'

import Content from '../Shared/Content'

import AppBar from './AppBar'
import AppLayout from './AppLayout'
import { AppStateProvider } from './AppStateProvider'
import Dashboard from '../Dashboard'
import Settings from '../Settings'


import './index.css'

class App extends React.Component {
    render() {
        return (
            <AppStateProvider>
                <AppLayout>
                    <AppBar />
                    <Content>
                        <Settings />
                        <Dashboard />
                    </Content>
                </AppLayout>
            </AppStateProvider>
        )
    }
}

export default App
