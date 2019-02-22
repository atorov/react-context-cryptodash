import React, { useContext } from 'react'

import { AppStateContext } from '../../App/AppStateProvider'
import { SelectableTile } from '../../Shared/Tile';
import CoinImage from '../../Shared/CoinImage';

import CoinHeaderGrid from '../CoinHeaderGrid'

export default function ({ coinKey }) {
    const { coinList: { data } } = useContext(AppStateContext)

    if (!data) {
        return null
    }

    const coin = data[coinKey]

    const TileClass = SelectableTile

    return (
        <TileClass>
            <CoinHeaderGrid {...coin} />
            <CoinImage coin={coin} />
        </TileClass>
    )


}
