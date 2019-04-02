import styled from "styled-components"

import Circle from "./Circle"
import Dot from "./Dot"
import Label from "./Label"

const WorkNav = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    right: 0;
    padding-right: 3rem;
`
WorkNav.Circle = Circle
WorkNav.Dot = Dot
WorkNav.Label = Label

export default WorkNav
