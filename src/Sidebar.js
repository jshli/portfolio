import React from 'react';
import StyledSidebar from './Blocks/Sidebar/index'

export default function Sidebar(props) {
    if (props.side === "left") {
        return (
            <StyledSidebar>
                <StyledSidebar.Line>
                    <StyledSidebar.Circle side={props.side}>
                        <StyledSidebar.Dot href="/about"/>
                    </StyledSidebar.Circle>
                </StyledSidebar.Line>
                <p>About me</p>
            </StyledSidebar>
        )}
    else {
        return (
        <StyledSidebar>
            <p>My Work</p>
            <StyledSidebar.Line>
            <StyledSidebar.Circle side={props.side}>
                <StyledSidebar.Dot href="/work"/> 
            </StyledSidebar.Circle>
            </StyledSidebar.Line>
        </StyledSidebar>
        )
    }
}