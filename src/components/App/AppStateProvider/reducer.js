export default function (state, action) {
    switch (action.type) {
        case ':CONFIRM_FAVORITES:':
            return {
                ...state,
                firstVisit: false,
                page: 'dashboard',
            }

        case ':SET_COIN_LIST:':
            return {
                ...state,
                coinList: action.payload.coinList,
            }

        case ':SET_PAGE:':
            return {
                ...state,
                page: action.payload.page,
            }

        default:
            throw new Error('Action type does not match!')
        // return state
    }
}
