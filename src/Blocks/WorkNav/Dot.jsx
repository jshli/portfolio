import styled from "styled-components"

const Dot = styled.div`
    height: 0.5rem;
    width: 0.5rem;
    border-radius: 1000px;
    background-color: ${props => props.active ? `#D4C5A8` : `black`};
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    cursor: pointer;
    
`

export default Dot