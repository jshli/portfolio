import styled from "styled-components"

const Container = styled.div `
    max-width: 960px;
    margin: 0 auto;
    ${({grid}) => grid && `
        display: grid;
        grid-template-columns: repeat(2,1fr);
        grid-column-gap: 1rem;
    `}
`

export default Container