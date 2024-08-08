import React, { useEffect } from 'react'
import Main from '../assets/main.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';


  

const DonateBox = () => {
  useEffect(() => {
    AOS.init({
      duration:1000,
      once:true,
    })
  }, [])
  return (
    <>


      <div data-aos="fade-up" className='w-full h-3/5 mt-20 flex items-center justify-center'>
    <div className='w-4/5 h-full relative '>
        <img className='w-full h-full object-cover rounded-xl' src={Main} alt="" />
        <div className='absolute inset-0 flex flex-col justify-end items-center text-center mb-10'>
            <h1 className='text-4xl md:text-2xl lg:text-4xl text-white mb-4 ' >"Sow the seeds of kindness: Donate today, change lives forever!"</h1>
            <p id="text_hide" className='text-xl text-white leading-8'>
                Your generosity can make a world of difference, every contribution counts towards a brighter future.
            </p>
        </div>
    </div>
</div>
    </>
  )
}

export default DonateBox