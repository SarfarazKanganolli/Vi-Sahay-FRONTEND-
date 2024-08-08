import React, { useEffect, useRef } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Hero from '../Components/Hero'
import HeroCard from '../Components/HeroCard'
import Info_box from '../Components/Info_box'
import Cards from '../Components/Cards'
import Voluteer from '../Components/Voluteer'
import AOS from 'aos';
import 'aos/dist/aos.css';



const Home = () => {
  useEffect(() => {
    AOS.init({
      duration:1000,
      once:true,
    })
  }, [])

  const voluteerRef = useRef(null);

  const scrollToVolunteer = () => {
    if (voluteerRef.current) {
      const headerOffset = 80; // Adjust this based on your header height
      const elementPosition = voluteerRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <Header />
      <Hero page="home" description="Home1" />
      <HeroCard onButtonClick={scrollToVolunteer} />
      <div data-aos="fade-up"><Info_box /></div>
      <div data-aos="fade-up"><Cards /></div>
      <div data-aos="fade-up"><Voluteer ref={voluteerRef} /></div>
      <Footer />
    </>
  );
};


export default Home