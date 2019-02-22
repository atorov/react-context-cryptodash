import React, { useContext } from 'react'

import { AppStateContext } from '../../App/AppStateProvider'
import {
    DeletableTile,
    DisableTile,
    SelectableTile,
} from '../../Shared/Tile';
import CoinImage from '../../Shared/CoinImage';

import CoinHeaderGrid from '../CoinHeaderGrid'

export default function ({ coinKey, topSection }) {
    const { coinList: { data } } = useContext(AppStateContext)

    if (!data) {
        return null
    }

    const coin = data[coinKey]

    let TileClass = SelectableTile
    if (topSection) {
        TileClass = DeletableTile
    }

    return (
        <TileClass>
            <CoinHeaderGrid
                {...coin}
                topSection={topSection}
            />
            <CoinImage coin={coin} />
        </TileClass>
    )


}
