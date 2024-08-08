import React, { useEffect,useState } from 'react'
import { NavLink } from 'react-router-dom'
import Insta from "../assets/instagram.png"
import Face from "../assets/facebook.png"
import Twitter from "../assets/twitter.png"
import AOS from 'aos';
import 'aos/dist/aos.css'

const Footer = () => {
    useEffect(() => {
        AOS.init({
          duration:1000,
          once:true
        })
      }, [])

    const [toggle, setToggle] = useState(null);

    const accordion = (index) => {
        if (toggle === index) {
            setToggle(null);
        } else {
            setToggle(index);
        }
    };

    const here = [
        { title: "SITE LINKS", links: ["Home", "Donation", "Message"] },
        { title: "Know Us", links: ["About", "Contact", "Blog"] },
    ];

    return (
        <div className='footer w-full h-auto mt-24 pb-28 bg-slate-900 flex justify-center items-center flex-col'>
            <h2 className='mt-10 text-4xl text-white'>Sign Up for Newsletter</h2>
            <div className='down w-2/5 h-14 mt-10 flex justify-center rounded-3xl border-none relative '>
                <div className='w-full h-14'>
                    <input className='w-full h-14 outline-none px-9 rounded-full text-2xl' type="email" placeholder='Your Email' />
                </div>
                <div className='w-20 h-14 justify-end absolute right-0'>
                    <button className='btn_foot w-28 h-14 rounded-full absolute bg-orange-500 text-white uppercase hover:bg-gray-400'>submit</button>
                </div>
            </div>

            <div className='w-4/5 h-full grid grid-cols-1 md:grid-cols-4 auto-cols-auto'>
                <div className='mt-20 text-white'>
                    <h1 className='text-2xl text-orange-500 underline'>Get To Us: </h1>
                    <div className='w-full'>
                        <h3 className='text-xl mt-5'>Location:</h3>
                        <p>1103, Ramada Road, Near Sativali, Opp Vimala, Dahisar</p>
                    </div>
                    <div>
                        <h3 className='text-xl mt-3'>Phone No: +815 999 0000</h3>
                        <p>+815 999 0000</p>
                    </div>
                    <div>
                        <h3 className='text-xl mt-3'>E-mail: Yourwebsit@mail.co</h3>
                    </div>
                </div>

                {here.map((item, index) => (
                    <div key={index} className='w-full h-full text-start justify-center items-center flex flex-col md:text-start'>
                        <div className='foot_back'>
                            <div className='title' onClick={() => accordion(index)}>
                                <h2 className='text-2xl text-orange-500 underline'>{item.title}</h2>
                                <span className='state'>{toggle === index ? '-' : '+'}</span>
                            </div>
                            {item.links.map((link) => (
                                <NavLink to={`/${link}`} className={`links text-xl text-gray-300 px-8 cursor-pointer ${toggle === index ? 'links_show' : 'links'}`} key={link}>
                                    {link}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                ))}

                <div className='w-full h-auto mt-20 text-white flex flex-col'>
                    <div className='w-full'>
                        <h1 className='text-2xl text-orange-500 underline pb-4'>About Us:</h1>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </div>

                    <div data-aos="fade-up" className='w-full h-auto flex mt-8 gap-3'>
                        <div className='w-10 h-10'><img className='w-full h-full ' src={Insta} alt="" /></div>
                        <div className="w-10 h-10" ><img className="w-full h-full" src={Face} alt="" /></div>
                        <div className="w-10 h-10"><img className='w-full h-full' src={Twitter} alt="" /></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
