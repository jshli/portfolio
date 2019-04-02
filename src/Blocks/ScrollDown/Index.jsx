import styled from "styled-components"

import Line from "./Line"

const ScrollDown = styled.div`
    position: absolute;
    font-style: italic;
    margin: 0 auto;
    bottom: 0;
    height: ${props => props.show ? `auto` : `0%`};
    overflow: hidden;
    transform-origin: top;
    display: flex;
    flex-direction: column;
    width: max-content;
    left: 50%;
    right: 50%;
    justify-content: center;
    align-items: center;
    transition: all ease-out 0.3s;
    >p { 
        margin-top: 0;
    }
`
ScrollDown.Line = Line

export default ScrollDown