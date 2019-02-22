const MAX_FAVORITES = 10

export default function (state, action) {
    switch (action.type) {
        case ':ADD_COIN:':
            const favorites = [...state.favorites]
            if (favorites.length < MAX_FAVORITES) {
                favorites.push(action.payload.coinKey)
            }
            return {
                ...state,
                favorites,
            }

        case ':CONFIRM_FAVORITES:':
            return {
                ...state,
                firstVisit: false,
                page: 'dashboard',
            }

        case ':REMOVE_COIN:':
            return {
                ...state,
                favorites: state.favorites.filter(key => key !== action.payload.coinKey),
            }

        case ':SET_COIN_LIST:':
            return {
                ...state,
                coinList: action.payload.coinList,
            }

        case ':SET_FILTERED_COINS:':
            return {
                ...state,
                filteredCoins: action.payload.filteredCoins,
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
