import { useEffect, useState } from 'react'

import fetchCoinList from '../api/fetch-coin-list'

export default function () {
    const [coinList, setCoinList] = useState({
        status: '',
        data: {},
    })

    useEffect(
        () => {
            fetchCoinList(0)
                .then(res => {
                    if (res && res.Data) {
                        setCoinList({
                            status: ':READY:',
                            data: res.Data,
                        })
                    }
                    else {
                        setCoinList((prevState) => ({
                            ...prevState,
                            status: ':ERROR:',
                        }))
                    }
                })
        },
        [],
    )

    return coinList
}
