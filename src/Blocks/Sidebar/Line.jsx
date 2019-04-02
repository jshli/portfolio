import styled, {keyframes} from "styled-components"

const transition = keyframes`
    from {
        width: 0%
    }
    to {
        width: 40%
    }
`

const Line = styled.div `
    width: 40%;
    border-bottom: solid 1px black;
    display: flex;
    position: relative;
`

export default Line