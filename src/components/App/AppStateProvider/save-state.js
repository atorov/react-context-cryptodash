import _ from 'lodash'

export default _.throttle(
    (state) => {
        try {
            const serialized = JSON.stringify(state)
            window.localStorage.setItem('cryptoDash', serialized)
            console.log('::: State has been saved to the local storage')
        } catch (reason) {
            console.error('::: Save state in the local storage failed with reason:', reason)
        }
    },
    5550,
    { 'leading': false },
)
