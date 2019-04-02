import styled from "styled-components"
import { animated } from 'react-spring'

const Circle = styled(animated.div) `
    height: 1.5rem;
    border: 2px solid black;
    transition: all ease-out 0.3s;

    background-color: transparent;
    &:hover {
        box-shadow: 0 0 20px black
    }
`

export default Circle