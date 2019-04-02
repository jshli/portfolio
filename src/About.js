import React from 'react'
import { Link } from 'react-router-dom'

export default function About(props) {
    return (
            <main className = "main__grid main__grid--grey">
                <div className="img-clmn">
                    <img class="image" src="/images/BTS_01-compressor.jpg"></img>
                </div>
                <div className="content-column">
                    <h2>Josh</h2>
                    <h2>Li.</h2>
                    <p>I'm a Melbourne-based front-end developer, designer, and co-founder of edutech startup, Niche. </p>
                    <p>Throughout my time, I've worked with amazing founders, startups and agencies from all around the world, helping them grow by building new products through lean, rapid prototyping, design-thinking and growth-driven web design.</p>
                    <p>If you're interested in building something awesome, or just felt like chatting, drop me a line.</p>
                    <p><b>What I do:</b></p>
                    <div className = "main__grid">
                        <div>
                            <p>HTML, CSS, Javscript</p>
                            <p>Ruby/Ruby on Rails</p>
                            <p>React</p>
                            <p>Node.js</p>
                        </div>
                        <div>
                            <p>Webflow</p>
                            <p>Web design</p>
                            <p>Google Analytics</p>
                            <p>UX Research</p>
                        </div>
                    </div>
                </div>
            </main>
        )
}