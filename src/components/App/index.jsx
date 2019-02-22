import React from 'react'

import Content from '../Shared/Content'

import AppBar from './AppBar'
import AppLayout from './AppLayout'
import { AppStateProvider } from './AppStateProvider'
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
                    </Content>
                </AppLayout>
            </AppStateProvider>
        )
    }
}

export default App
