import React from 'react'
import { Link } from 'react-router-dom'

import Main from "./Elements/Main"
import ContactContainer from "./Blocks/Contact/Index"
import ContentGrid from "./Elements/ContentGrid"


export default function Contact(props) {
    return (
            <section>
                <Main>
                    <ContactContainer>
                        <p>Let's get in touch</p>
                        <a href="mailto: joshxli.io@gmail.com"><h2>joshxli.io@gmail.com</h2></a>
                        <ContentGrid>
                            <a href="https://github.com/jshli/"><p>LinkedIn</p></a>
                            <a href="https://www.linkedin.com/in/jshli/"><p>Github</p></a>
                        </ContentGrid>
                    </ContactContainer>
                </Main>
            </section>
        )
}