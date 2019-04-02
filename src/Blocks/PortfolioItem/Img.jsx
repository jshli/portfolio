import styled from "styled-components"

const Img = styled.div `
    width: 100%;
    height: 40rem;
    background-image: url(${props => props.imgUrl});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    margin: 0 auto;
    filter: saturate(0%);
    &:hover {
        filter: saturate(100%)
    }
    transition: all ease 0.3s;
`

export default Img