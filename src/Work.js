import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import _ from 'lodash';
import { useTransition, animated, } from "react-spring"

import WorkNav from "./Blocks/WorkNav/Index"
import Main from "./Elements/Main"
import Container from "./Elements/Container"
import PortfolioItem from "./Blocks/PortfolioItem/Index"



const portfolio = [
    {
        name: "Geshido",
        categories: [
            "Web App Development",
            "UI Design",
            "React x Rails"
        ],
        description: "An minimalist to-do list with built-in time-keeping capabilities, designed to help freelancers and solo teams keep track of productivity and billable hours.",
        link: "https://geshido-api.herokuapp.com/login",
        imgUrl:"/images/black-and-white-black-and-white-fog-234272-compressor.jpg"
    },
    {
        name: "Niche",
        categories: [
            "Web App Development",
            "UI Design",
            "React x Rails"
        ],
        description: "Niche is an online learning platform dedicated to teaching high-school students the necessary skills to succeed in their VCE Exams. Niche is a startup I have helped co-found.",
        link: "http://meetniche.com/",
        imgUrl: "/images/beverage-books-caffeine-904616-compressor.jpg"
    },
    {
        name: "Breathe",
        categories: [
            "Web App Development",
            "UI Design",
            "React"
        ],
        description: "A mini-app that takes users through a simple breathing exercise. Built to test SVG animations using the Anime.js library.",
        link: "https://jshli.github.io/breathapp/index.html",
        imgUrl: "/images/Screen-Shot-2019-04-02-at-2.31.35-pm-compressor.png"
    },
    
    {
        name: "VCE Study Guides",
        categories: [
            "UX/UI Design",
            "Web Development"
        ],
        description: "VCE Study Guides is one of the most visited and trusted sources of VCE English Resources. Engaged to design and develop their website, I've taken their website from paper-sketch stages, to a site that sees 50,000 users a month. I also continue to optimise the site through analytics and UX research.",
        link: "https://www.vcestudyguides.com/",
        imgUrl:"https://uploads-ssl.webflow.com/5a0a62705f389a000169e9b7/5b91bc9bc4d8a30ab15d3e07_hero%20bean.svg",
    },
]

export default function Work(props) {
    const [currentItem, setCurrentItem] = useState(portfolio[0])
    
    const handleScroll = (event) => {
        event.persist()
        debounced(event)
    }

   

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    })

    const getIndex = () => {
        let index;
        portfolio.forEach((e, i) => {
            if (e === currentItem){
                index = i
            }
        })
        return index;
    }

    const getItem = index => {
        setCurrentItem(portfolio[index])
    }

    const debounced = _.debounce(function(event){
        let currentIndex = getIndex()
        console.log(event)
        if (event.deltaY > 0) {
            if (currentIndex < portfolio.length-1) {
                setCurrentItem(portfolio[currentIndex+1])
            }
        } else if (event.deltaY < 0) {
            if (currentIndex > 0){
                setCurrentItem(portfolio[currentIndex-1])
            }
        }
    }, 100)

    
    return (
            <section onWheel={handleScroll}>

                <WorkNav>
                    {portfolio.map((item, index) => {
                        return (
                            <WorkNav.Dot onClick={() => getItem(index)} active={currentItem === item}>
                                <WorkNav.Circle active={currentItem === item}/>
                                {currentItem === item ? <WorkNav.Label>{item.name}</WorkNav.Label> : ""}
                            </WorkNav.Dot>
                        )
                    })}
                </WorkNav>
                <Main>
                    <Container grid={true}>
                        <PortfolioItem>
                            <PortfolioItem.Range>
                                <p>{`0${getIndex() + 1}`}</p>
                                <PortfolioItem.Divider/>
                                <p>0{portfolio.length}</p>
                            </PortfolioItem.Range>
                            <PortfolioItem.Categories>
                                {currentItem.categories.map(category => <p>{category}</p>)}
                            </PortfolioItem.Categories>
                            <h2>{currentItem.name}</h2>
                            <p>{currentItem.description}</p>
                            <PortfolioItem.Link href={currentItem.link}>See Website</PortfolioItem.Link>
                        </PortfolioItem>
                        <PortfolioItem.Img imgUrl={currentItem.imgUrl}/>
                    </Container>
                </Main>
            </section>
        )
}