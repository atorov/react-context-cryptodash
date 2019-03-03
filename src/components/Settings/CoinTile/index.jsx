import React, { useContext } from 'react'

import {
    AppDispatchContext,
    AppStateContext,
} from '../../App/AppStateProvider'
import {
    DeletableTile,
    DisableTile,
    SelectableTile,
} from '../../Shared/Tile';
import CoinImage from '../../Shared/CoinImage';

import CoinHeaderGrid from '../CoinHeaderGrid'

export default function ({ coinKey, topSection }) {
    const dispatch = useContext(AppDispatchContext)
    const {
        coinList: { data },
        favorites,
    } = useContext(AppStateContext)

    if (!data) {
        return null
    }

    const coin = data[coinKey]

    let TileClass = SelectableTile
    if (topSection) {
        TileClass = DeletableTile
    }
    else if (favorites.includes(coinKey)) {
        TileClass = DisableTile
    }

    return (
        <TileClass onClick={topSection
            ? () => dispatch({
                type: ':REMOVE_COIN:',
                payload: { coinKey }
            })
            : () => dispatch({
                type: ':ADD_COIN:',
                payload: { coinKey }
            })
        }>
            <CoinHeaderGrid
                {...coin}
                topSection={topSection}
            />
            <CoinImage coin={coin} />
        </TileClass>
    )
}
