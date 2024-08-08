import React from 'react'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import Footer from '../Components/Footer'
import AboutCard from '../Components/AboutCard'

const About = () => {
  return (
    <>
    <Header/>
    <Hero page='about' description='About' />
    <AboutCard/>
    <Footer/>
    </>
  )
}

export default About