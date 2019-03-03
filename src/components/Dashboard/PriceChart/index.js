import React, { useContext } from 'react'

import ReactHighcharts from 'react-highcharts'

import { AppDispatchContext, AppStateContext } from '../../App/AppStateProvider'
import { Tile } from '../../Shared/Tile'

import ChartSelect from '../ChartSelect'

import highchartsConfig from './highcharts-config'
import highchartsTheme from './highcharts-theme'

ReactHighcharts.Highcharts.setOptions(highchartsTheme)

export default function () {
    const dispatch = useContext(AppDispatchContext)
    const { historical, timeInterval } = useContext(AppStateContext)

    return (
        <Tile>
            <ChartSelect
                value={timeInterval}
                onChange={event => dispatch({
                    type: ':SET_TIME_INTERVAL:',
                    payload: { timeInterval: event.target.value },
                })}
            >
                <option value="days">Days</option>
                <option value="weeks">Weeks</option>
                <option value="months">Months</option>
            </ChartSelect>

            {
                historical.status === ':LOADING:'
                    ? <div>'Loading historical data...'</div>
                    : <ReactHighcharts config={highchartsConfig(historical.data)} />
            }
        </Tile >
    )
}
