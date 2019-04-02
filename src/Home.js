import React from 'react'
import { Link } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'


import Sidebar from './Sidebar'
import Background from "./Elements/Background"


export default function Home(props) {

    return (
        <main>

            <Background/>
            <Sidebar side={"left"}/>
            <section className="hero">
                <h1>Hi, my name is</h1>
                <h1><span>Josh Li.</span></h1>
                <div className="divider"></div>
                <p>I'm a Melbourne based front-end developer and startup founder focused on solving problems through building beautiful products. </p>
            </section>
            <Sidebar side={"right"} />
        </main>
        )
}