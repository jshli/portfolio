import styled from "styled-components"

import Line from "./Line"
import Dot from "./Dot"
import Circle from "./Circle"

const StyledSidebar = styled.div `
    height: 100%;
    display: flex;
    justify-content: ${props => props.side === "left" ? 'left' : 'flex-end'};
    padding-left: ${props => props.side === "left" ? "1.5rem" : 0};
    padding-right: ${props => props.side === "right" ? "1.5rem" : 0};
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