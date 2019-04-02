import styled, {keyframes} from "styled-components"


const Circle = styled.div `
    border-radius: 1000px;
    height: 2rem;
    width: 2rem;
    border: solid 1px black;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    left: ${props => props.side === "right" ? `` : `-1rem`};
    ${props => props.side === "right" && `
        right: -1rem;
    `}
`

export default Circle