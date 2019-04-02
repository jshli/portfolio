import styled from "styled-components"

import Categories from "./Categories"
import Link from './Link'
import Range from "./Range"
import Divider from "./Divider"
import Img from "./Img"

const PortfolioItem = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
`

PortfolioItem.Categories = Categories
PortfolioItem.Link = Link
PortfolioItem.Range = Range
PortfolioItem.Divider = Divider
PortfolioItem.Img = Img

export default PortfolioItem