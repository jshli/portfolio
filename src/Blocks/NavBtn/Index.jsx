import styled from "styled-components"

import Circle from "./Circle"

const NavButton = styled.div `
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 1rem;
    right: 2rem;
    z-index: 3;
    flex-direction: column;
    >p {
        margin-top: 0;
    }
`

NavButton.Circle = Circle 

export default NavButton