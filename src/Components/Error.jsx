import React from 'react'
import { NavLink } from 'react-router-dom'
import ErrImage from '../assets/bg_1.jpg'

const Error = () => {
  return (
   <>
    <div className='w-full h-full bg-black flex flex-col justify-center items-center'>
        <img className="w-full h-full object-cover relative" src={ErrImage} alt="" />
        <div className='w-96 h-auto flex absolute flex-col text-white justify-center items-center text-6xl'>
            <h1 className=''>404</h1>
            <h3>Page not found</h3>
        </div>

        <div className='w-[20rem] h-12 mt-60 gap-8 absolute flex justify-center items-center'>
            <NavLink to="/home" className='w-[10rem] h-full bg-slate-500 rounded-3xl uppercase text-center pt-3 hover:bg-white'>Home Page</NavLink>
            <NavLink to="/contact" className='w-[10rem] h-full bg-slate-300 rounded-3xl uppercase text-center pt-3 hover:bg-white'>Contact Page</NavLink>
        </div>


    </div>
   </>
  )
}

export default Error