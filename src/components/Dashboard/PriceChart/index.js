import React, { useContext } from 'react'

import ReactHighcharts from 'react-highcharts'

import { AppStateContext } from '../../App/AppStateProvider'
import { Tile } from '../../Shared/Tile'

import highchartsConfig from './highcharts-config'

export default function () {
    const state = useContext(AppStateContext)

    return (
        <Tile>
            <ReactHighcharts config={highchartsConfig()} />
        </Tile>
    )
}
