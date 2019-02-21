import React from 'react'

import AppLayout from './AppLayout'

import AppBar from './AppLayout/AppBar'

import './index.css'

class App extends React.Component {
    render() {
        return (
            <AppLayout>
                <AppBar />
                App
            </AppLayout>
        )
    }
}

export default App
