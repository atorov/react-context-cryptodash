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

export const DeletableTile = styled(SelectableTile)`
    &:hover {
        cursor: pointer;
        ${styles.redBoxShadow}
    }
`

export const DisableTile = styled(Tile)`
    pointer-events: none;
    opacity: 0.4;
`
