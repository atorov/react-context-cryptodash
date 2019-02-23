import React from 'react'

// TODO: Should be something more meaningful
export default class extends React.Component {
    componentDidCatch() {
        window.location.reload()
    }

    render() {
        return this.props.children;
    }
}
