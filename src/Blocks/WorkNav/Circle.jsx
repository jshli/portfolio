import styled from "styled-components"

const Circle = styled.div `
    height: ${props => props.active ? "1.5rem" : "0"};
    width: ${props => props.active ? "1.5rem" : "0"};
    border-radius: 1000px;
    border: 1px solid #D4C5A8;
    position: absolute;
    transition: all ease-out 0.3s;
    opacity: ${props => props.active ? "1" : "0"}
`

export default Circle