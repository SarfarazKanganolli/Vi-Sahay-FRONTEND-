import React from 'react'
import "../Styling/Hero.css"
import Donate from '../assets/charity.png'
import Hand from '../assets/handshake.png'
import Heart from '../assets/heart.png'

const Info_box = () => {
    return (
        <>
<div id='info' className='w-full h-2/5 flex mt-36 items-center justify-center px-4'>
    <div className='w-full h-full max-w-7xl mx-auto flex flex-col md:flex-row gap-8 md:gap-4 bg-white p-4'>
        {/* First Info Box */}
        <div className='info_box flex items-center'>
            <span className='mr-3'>
                <img className='w-20 h-16 md:w-36 md:h-20' src={Donate} alt="Make Donation" />
            </span>
            <div>
                <h2 className='text-xl md:text-2xl font-semibold'>Make Donation</h2>
                <p className='text-sm md:text-base'>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
            </div>
        </div>

        {/* Second Info Box */}
        <div className='info_box flex items-center'>
            <span className='mr-3'>
                <img className='w-20 h-16 md:w-36 md:h-20' src={Hand} alt="Become A Volunteer" />
            </span>
            <div>
                <h2 className='text-xl md:text-2xl font-semibold'>Become A Volunteer</h2>
                <p className='text-sm md:text-base'>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
            </div>
        </div>

        {/* Third Info Box */}
        <div className='info_box flex items-center'>
            <span className='mr-3'>
                <img className='w-20 h-16 md:w-36 md:h-20' src={Heart} alt="Sponsorship" />
            </span>
            <div>
                <h2 className='text-xl md:text-2xl font-semibold'>Sponsorship</h2>
                <p className='text-sm md:text-base'>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
            </div>
        </div>
    </div>
</div>









        </>
    )
}

export default Info_box