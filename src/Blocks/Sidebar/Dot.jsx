import styled from "styled-components"

const Dot = styled.a `
    height: 0.5rem;
    width: 0.5rem;
    background-color: black;
    border-radius: 1000px;
    cursor: pointer;
    transition: all ease 0.3s;
    &:hover {
        background-color: #D4C5A8
    }
`

export default Dot