import React, { useEffect, useRef, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

const HeroCard = ({onButtonClick}) => {
    const navigate = useNavigate();

    const NavigateTo =()=>{
        navigate('/Donation')
    }


    const AnimatedNumber = ({ target }) => {
        const [number, setNumber] = useState(50000);
      
        useEffect(() => {
          let start = 50000;
          let end = target;
          let duration = 2000; 
          let increment = Math.ceil((end - start) / (duration / 40)); // Adjust the interval for smoother animation
      
          const updateNumber = () => {
            if (start < end) {
              start += increment;
              setNumber(start);
              setTimeout(updateNumber, 30); // Update every 50ms
            } else {
              setNumber(end);
            }
          };
      
          updateNumber();
        }, [target]);
      
        return <h3 className="mt-4 px-2 text-4xl md:text-6xl">{number.toLocaleString()}</h3>;
      };
    return (
        <>
            <div id="out_box" className="flex items-center justify-center p-5">
                <div id="box" className="w-full max-w-6xl mx-4 flex flex-wrap bg-yellow-400">
                    <div className="boxes flex-1 bg-orange-500 p-4">
                        <h3 className="mt-4 px-2 text-xl md:text-3xl">Served Over</h3>
                        <AnimatedNumber target={1432805} />
                        <h3 className="mt-4 px-2 text-lg md:text-2xl">
                            Children in 190 countries in the world
                        </h3>
                    </div>
                    <div className="boxes flex-1 bg-orange-400 p-4">
                        <h3 className="mt-4 px-2 text-xl md:text-3xl">Donate Money</h3>
                        <p className="px-2 mt-4 text-base md:text-lg">
                            Even the all-powerful Pointing has no control about the blind texts.
                        </p>
                        <button  onClick={NavigateTo} className="btn mt-4 py-2 px-4 bg-red-500 text-black rounded-sm hover:bg-red-600">
                            Donate Now
                        </button>
                    </div>
                    <div className="boxes flex-1 bg-orange-300 p-4">
                        <h3 className="px-2 mt-4 text-xl md:text-3xl">Be a Volunteer</h3>
                        <p className="px-2 mt-4 text-base md:text-lg">
                            Even the all-powerful Pointing has no control about the blind texts.
                        </p>
                        <button onClick={ onButtonClick }className="btn mt-4 py-2 px-4 bg-red-500 text-black rounded-sm hover:bg-red-600">
                            Be a Volunteer
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default HeroCard