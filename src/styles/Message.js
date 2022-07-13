import styled from 'styled-components'
import { Text } from 'styled-minimal'

export const TextMessage = styled(Text)`
    color: #fff;

    & span {
        display: inline-block;
        background-color: #fff;
        color: ${(props) => props.color};
        padding: 2px;
    }
`
