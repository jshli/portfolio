import styled from "styled-components"

import Icons from './Icons'
import Link from "./Link"
import Text from "./Text"

const Footer = styled.div`
    position: absolute;
    bottom: 0;
    padding: 0 3rem 2rem 3rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;

`

Footer.Icons = Icons;
Footer.Link = Link;
Footer.Text = Text;

export default Footer