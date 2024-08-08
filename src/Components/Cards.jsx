import React, { useEffect, useState } from 'react';
import CardImg from '../assets/event-1.jpg';
import CardImg2 from '../assets/event-3.jpg';
import CardImg3 from '../assets/event-4.jpg';
import axios from 'axios'; 
import AOS from 'aos';
import 'aos/dist/aos.css';
import BASE_URL from "../Services/helper.js"


  

const Cards = () => {
  useEffect(() => {
    AOS.init({
      duration:1000,
      once:true,
    })
  }, [])

    const [stripeUrl, setStripeUrl] = useState('');

    useEffect(() => {
        // Fetch the Stripe URL from the backend
        const fetchStripeUrl = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/api/stripe-url`);
                setStripeUrl(response.data.url);
              
            } catch (error) {
                console.error('Error fetching Stripe URL:', error);
            }
        };

        fetchStripeUrl();
    }, []);

    

    const handleUrl = () => {
        if (stripeUrl) {
            window.open(stripeUrl, '_blank');
        }
    };


    const info = [
        { images: CardImg, heading: "Clean Water for the urban areas", description: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life" },
        { images: CardImg2, heading: "Clean Water for the urban areas", description: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life" },
        { images: CardImg3, heading: "Clean Water for the urban areas", description: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life" },
        
    ];

    return (
        <>

<div data-aos="fade-up"className='w-full h-auto my-24 px-4 flex justify-center items-center'>
    <div className='w-full h-auto max-w-7xl grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-8'>
        {info.map((item, index) => (
            <div key={index} className='w-full pb-14  bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden'>
                {/* Ensure the image scales properly on smaller screens */}
                <div className='w-full h-48 sm:h-56 md:h-60'>
                    <img className='w-full h-full object-cover' src={item.images} alt={item.description} />
                </div>
                <div className='p-4 flex flex-col justify-center items-center'>
                    <h1 className='text-lg sm:text-xl md:text-2xl font-semibold text-black text-center mb-3'>{item.heading}</h1>
                    <p className='text-sm sm:text-base md:text-lg text-slate-500 text-center'>{item.description}</p>
                    <button onClick={handleUrl} className='w-4/5 mt-14 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition duration-300'>
                        Donate
                    </button>
                </div>
            </div>
        ))}
    </div>
</div>



    
        </>
    );
};

export default Cards;
