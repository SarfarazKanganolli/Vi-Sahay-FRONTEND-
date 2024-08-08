import React, { useEffect } from 'react'
import Header from '../Components/Header'
import ContactForm from '../Components/ContactForm'
import Footer from '../Components/Footer'
import Hero from '../Components/Hero'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration:1000,
      once:true,
    });
  }, [])
  

  return (
    <>
    <Header/>
    <Hero page='contact' description ='Contact'/>
    <div data-aos="fade-up"><ContactForm/></div>
    <Footer/>
    </>
    

  )
}

export default Contact