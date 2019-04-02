import styled, {keyframes} from "styled-components"

const transition = keyframes`
    from {
        transform: scale(2);
        opacity: 0;
    }
    to {
        transform: scale(1);
        opacity: 0.5;
    }
`

const Background = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    z-index: -1;
    opacity: 0;
    background: url("/images/DSC06208 copy.jpg");
    background-size: cover;
    background-position: center;
    animation: ${transition} 2.5s forwards;
    animation-delay: 1s;
`

export default Background