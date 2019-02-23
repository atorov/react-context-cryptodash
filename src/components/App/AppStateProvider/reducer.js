const MAX_FAVORITES = 10

export default function (state, action) {
    switch (action.type) {
        case ':ADD_COIN:':
            console.log(':ADD_COIN:')
            const favorites = [...state.favorites]
            if (favorites.length < MAX_FAVORITES) {
                favorites.push(action.payload.coinKey)
            }
            return {
                ...state,
                favorites,
            }

        case ':CONFIRM_FAVORITES:':
            console.log(':CONFIRM_FAVORITES:')
            return {
                ...state,
                currentFavorite: state.favorites[0] || 'BTC',
                firstVisit: false,
                page: 'dashboard',
            }

        case ':REMOVE_COIN:':
            console.log(':REMOVE_COIN:')
            const newFavorites = state.favorites.filter(key => key !== action.payload.coinKey)
            const newCurrentFavorite = newFavorites[0] || newFavorites[0] === 0 || 'BTC'
            return {
                ...state,
                currentFavorite: newCurrentFavorite,
                favorites: newFavorites,
            }

        case ':SET_COIN_LIST:':
            console.log(':SET_COIN_LIST:')
            return {
                ...state,
                coinList: action.payload.coinList,
            }

        case ':SET_COIN_PRICES:':
            console.log(':SET_COIN_PRICES:')
            return {
                ...state,
                prices: action.payload.prices,
            }

        case ':SET_CURRENT_FAVORITE:':
            console.log(':SET_CURRENT_FAVORITE:')
            return {
                ...state,
                currentFavorite: action.payload.currentFavorite,
            }

        case ':SET_FILTERED_COINS:':
            console.log(':SET_FILTERED_COINS:')
            return {
                ...state,
                filteredCoins: action.payload.filteredCoins,
            }

        case ':SET_HISTORICAL:':
            console.log(':SET_HISTORICAL:')
            return {
                ...state,
                historical: action.payload.historical,
            }

        case ':SET_PAGE:':
            console.log(':SET_PAGE:')
            return {
                ...state,
                page: action.payload.page,
            }

        default:
            throw new Error('Action type does not match!')
        // return state
    }
}
