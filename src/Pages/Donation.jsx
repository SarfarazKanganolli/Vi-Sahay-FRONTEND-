import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import DonateBox from '../Components/DonateBox'
import Hero from '../Components/Hero'
import Cards from '../Components/Cards'




const Donation = () => {
  return (
    <>
    <Header/>
    <Hero page='donation' description='Donation1'/>
    <DonateBox/>
    <Cards/>
    <Footer/>
    </>
  ) 
}

export default Donation