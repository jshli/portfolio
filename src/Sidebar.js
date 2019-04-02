import React from 'react';

import StyledSidebar from './Blocks/Sidebar/index'

export default function Sidebar(props) {
    if (props.side === "left") {
        return (
            <StyledSidebar side={"left"}>
                <StyledSidebar.Line>
                    <StyledSidebar.Circle side={"left"}>
                        <StyledSidebar.Dot href="/about"/>
                    </StyledSidebar.Circle>
                </StyledSidebar.Line>
                <p>About me</p>
            </StyledSidebar>
        )}
    else {
        return (
        <StyledSidebar side={"right"}>
            <p>My Work</p>
            <StyledSidebar.Line>
            <StyledSidebar.Circle side={"right"}>
                <StyledSidebar.Dot href="/work"/> 
            </StyledSidebar.Circle>
        </StyledSidebar.Line>
        </StyledSidebar>
        )
    }
}