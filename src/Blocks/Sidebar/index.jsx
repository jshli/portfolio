import styled from "styled-components"

import Line from "./Line"
import Dot from "./Dot"
import Circle from "./Circle"

const StyledSidebar = styled.div `
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    > p {
        margin-top: 0;
        margin-bottom: 0;
    }
`

StyledSidebar.Line = Line
StyledSidebar.Dot = Dot
StyledSidebar.Circle = Circle

export default StyledSidebar