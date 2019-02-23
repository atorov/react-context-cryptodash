import React, { useContext } from 'react'

import ReactHighcharts from 'react-highcharts'

import { AppStateContext } from '../../App/AppStateProvider'
import { Tile } from '../../Shared/Tile'

import highchartsConfig from './highcharts-config'
import highchartsTheme from './highcharts-theme'

ReactHighcharts.Highcharts.setOptions(highchartsTheme)

export default function () {
    const { historical } = useContext(AppStateContext)

    return (
        <Tile>
            {historical.status === ':LOADING:' ? 'Loading historical data...' : (
                <ReactHighcharts config={highchartsConfig(historical.data)} />
            )}
        </Tile>
    )
}
