import styled from 'styled-components'

import * as styles from '../styles'

export const Tile = styled.div`
    ${styles.subtleBoxShadow}
    ${styles.lightBlueBackground}
    padding: 10px;
`

export const SelectableTile = styled(Tile)`
    &:hover {
        cursor: pointer;
        ${styles.greenBoxShadow}
    }
`
