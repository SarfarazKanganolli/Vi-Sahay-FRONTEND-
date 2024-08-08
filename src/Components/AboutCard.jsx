import React, { useEffect } from 'react'
import AboutBack from '../assets/bg_3.jpg'
import AboutInfo from '../assets/event-1.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutCard = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration in milliseconds
          once: true, // Whether animation should happen only once
        });
      }, []);

    return (
        <>
            <div  data-aos="fade-up"  className='w-full mt-28 mb-20 px-6 sm:px-10 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-6 items-start'>
                {/* First Section: Image */}
                <div className='w-full h-60 md:h-full bg-black'>
                    <img className="w-full h-full object-cover" src={AboutBack} alt="About Background" />
                </div>

                {/* Second Section: Text Content */}
                <div className='pt-8 md:pt-16 px-4 md:px-10 w-full h-full'>
                    <h1 className='text-2xl md:text-3xl mb-4 md:mb-8'>About Us</h1>
                    <p className='pb-6'>
                        <strong className='text-4xl'>O</strong>ur mission is to empower underprivileged communities through education,
                        healthcare, and sustainable development. We strive to create opportunities
                        that enable individuals to improve their lives and communities.
                    </p>

                    <p><strong className='text-4xl'>W</strong>e envision a world where every person has the opportunity to lead a healthy, 
                        fulfilling life, free from poverty and inequality. Our vision is a society where 
                        everyone has access to the resources and support they need to achieve their full potential.</p>
                </div>
            </div>



            <div data-aos="fade-up" className=' w-full h-3/5 flex flex-col justify-center items-center relative'>
                <div className='w-4/5 h-full bg-slate-500  '>
                    <img className='w-full h-full object-cover opacity-75' src={AboutInfo} alt="" />

                </div>
                <button className='w-36 h-16 mt-64 bg-white rounded-xl absolute ' >Watch Video</button>
            </div>










        </>
    )
}

export default AboutCard