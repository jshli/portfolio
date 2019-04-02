import styled from "styled-components"
import { animated } from 'react-spring'

const Link = styled(animated.a)`
    color: black;
    text-decoration: none;
    font-family: 'Muli', sans-serif;
    transition: all ease-out 0.3s;
    &:hover {
        color: #D4C5A8
    }
`

export default Link