import React, { useEffect } from 'react'
import MessageHero from "../assets/disaster-2.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';

  
const MessageInfo = () => {
    useEffect(() => {
        AOS.init({
          duration:1000,
          once:true
        })
      }, [])
    return (
        <>
            <div id="message_back" className='w-full h-full flex justify-center items-center'>
                <div className='w-full h-full relative bg-black'>
                    <img className="w-full h-full object-cover opacity-55" src={MessageHero} alt="" />
                    <div data-aos="fade-in"className='message mt-20 text-white px-6 md:px-12 tracking-wider'>
                        <h1 className='text-5xl mb-8'>Alert Us About Disasters</h1>
                        <p className='text-3xl leading-9'>
                            Please use the form below to notify us of any disasters currently happening or unfolding in your area. <br />
                            Your message will help us coordinate with government officials and respond promptly to support affected communities.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MessageInfo