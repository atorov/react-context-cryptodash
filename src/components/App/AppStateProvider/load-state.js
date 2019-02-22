export default function () {
    let savedState = {}
    try {
        const serialized = window.localStorage.getItem('cryptoDash')
        if (serialized) {
            savedState = JSON.parse(serialized)
        }
    } catch (reason) {
        console.error('::: Load state from the local storage failed with reason:', reason)
    }

    return savedState
}
