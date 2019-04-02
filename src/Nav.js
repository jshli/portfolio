import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useTransition, animated, useTrail, useSpring } from "react-spring"

import NavBtn from "./Blocks/NavBtn/Index"
import Menu from "./Blocks/NavMenu/Index"

export default function Nav(props) {
    const [active, toggle] = useState(false)

    const config = { mass: 5, tension: 2000, friction: 200 }
    
    const transitions = useTransition(active, null, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config:{ mass: 1, tension: 2100, friction: 200 }
      }, )

    const items = [
        {text: "Home", link: "/"}, 
        {text: "About", link: "/about"},
        {text: "Work", link: "/work"},
        {text: "Get in Touch", link: "/contact"}
    ]
    
    const circle = useSpring({
        to: active ? [{ width: 0, borderRadius: 0, tranform: `rotateZ(0deg)`}, { transform: `rotateZ(270deg)` }] 
        :
        [{ transform: `rotateZ(0deg)` }, { width: 24, borderRadius: 1000}],
        from: {width: active ? 0 : 24, borderRadius: active ? 0 : 1000, transform: active ? `rotateZ(270deg)`:`rotateZ(0deg)`},
        config:{ mass: 1, tension: 2100, friction: 100 }
    })

    const handleClick = () => {
        toggle(!active)
    }

    const trail = useTrail(items.length, {
        config,
        opacity: active ? 1 : 0,
        x: active ? 0 : 20,
        height: active ? 80 : 0,
        from: { opacity: 0, x: 20, height: 0 },
    })

    return (
        <div>
            <NavBtn onClick={handleClick}>
                <NavBtn.Circle style={circle}/>
                <p>Menu</p>
            </NavBtn>
                {transitions.map(({ item, key, props }) => item &&
                    <Menu className="menu" style={props}>
                        {trail.map(({ x, height, ...rest }, index) => (
                            <animated.div
                            key={index}
                            style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
                                <Menu.Link href={items[index].link} style={{ height }}>{items[index].text}</Menu.Link>
                            </animated.div>
                        ))}
                </Menu>
                )} 
        </div>
    )
}
    