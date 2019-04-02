import styled from "styled-components"
import { animated } from 'react-spring'

import Link from "./Link"

const Menu = styled(animated.div) `
    height: 100vh;
    width: 100vw;
    background: white;
    display:grid;
    color: black;
    align-items: center;
    grid-auto-flow: column;
    justify-items: center;
    color: black;
    text-decoration: none;
    font-size: 2rem;
    grid-column-gap: 1rem;
    z-index: 2;
    transition: all ease-out 0.3s;
`
Menu.Link = Link
export default Menu