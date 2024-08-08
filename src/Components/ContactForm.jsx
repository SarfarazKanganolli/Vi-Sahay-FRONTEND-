import React, { useState } from 'react'
import ContactImg from '../assets/image_5.jpg'
import { useNavigate } from "react-router-dom"
import axios from 'axios';
import BASE_URL from '../Services/helper.js'

const ContactForm = () => {

    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
    });

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        if (name === 'phone' && value.length > 10) return;

        setUser({
            ...user,
            [name]: value,
        })
    };

    const [loading, setloading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setloading(true)
        try {
            const response = await axios.post(`${BASE_URL}/api/form/contact`, user, {
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (response.status === 200) {
                setUser({
                    name: "",
                    phone: "",
                    email: "",
                    message: "",
                });
                navigate("/contact")
            }

            console.log(response);
        } catch (error) {
            console.error("Error caught:", error);
        }finally {
            setloading(false)
        }
    }


    return (
        <>

            <div className='w-full h-auto flex justify-center items-center'>
                <div className='w-4/5 h-full my-16 grid grid-cols-2 md:grid-cols-4 auto-cols-auto gap-10'>
                    <div className=' flex flex-col text-lg text-wrap'>
                        <h1 className='text-2xl'>Contact Information</h1>
                        <h3 className='text-lg'>Address: 198 West 21th Street, Suite 721 New York NY 10016</h3>
                    </div>

                    <div className='flex items-end mb-10 text-lg'>
                        <h1>Phone: + 1235 2355 98</h1>
                    </div>
                    <div className='flex items-end mb-10 text-lg'>
                        <h1>Email: info@yoursite.com</h1>
                    </div>
                    <div className='flex items-end mb-10 text-lg'>
                        <h1>Website yoursite.com</h1>
                    </div>
                </div>
            </div>

            
                <div className=' w-full h-auto px-6 grid grid-cols-1 md:grid-cols-2 auto-cols-auto  '>
                    <div className='w-full h-full '>
                        <img className='w-full h-full object-cover bg-center' src={ContactImg} alt="" />
                    </div>

                    <div className='bg-slate-800 '>
                        <form className='w-full h-full flex flex-col justify-start items-center' onSubmit={handleSubmit} >
                            <h1 className='py-10 px-20 text-4xl text-orange-500'>Do you have any questions?</h1>

                            <div className='fields w-4/5 h-18 flex flex-col justify-center items-center'>
                                <input className="form_input w-full h-12 text-white" type="text" name='name' value={user.name} onChange={handleInput} autoComplete='off' required />
                                <label >Name</label>
                            </div>

                            <div className='fields w-4/5 h-18 flex flex-col  justify-center items-center'>
                                <input className="form_input w-full h-12 " type="number" name='phone' value={user.phone} onChange={handleInput} autoComplete='off' required />
                                <label htmlFor="">Phone-No:</label>
                            </div>


                            <div className='fields w-4/5 h-18 flex flex-col pb-6 justify-center items-center'>
                                <input className="form_input w-full h-12 text-white" type="text" name='email' value={user.email} onChange={handleInput} autoComplete='off' required />
                                <label htmlFor="">Email</label>
                            </div>



                            <div className='fields w-4/5 h-18 flex flex-col justify-center items-center'>
                                <textarea className="form_input w-full h-20 text-white" type="text" name='message' placeholder="Message" value={user.message} onChange={handleInput} autoComplete='off' required></textarea>
                            </div>

                            <button className=' mt-5 mb-5 w-36 h-12 bg-slate-100 rounded-3xl hover:bg-orange-500' disabled={loading}>{loading ? "Submitting..." : "Submit"}</button>

                        </form>



                    </div>

                </div>

           


        </>
    )
}

export default ContactForm