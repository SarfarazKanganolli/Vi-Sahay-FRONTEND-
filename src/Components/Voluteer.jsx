import React, { forwardRef, useState } from 'react';
import BeVolunteer from "../assets/image_1.jpg";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import BASE_URL from '../Services/helper.js'

const Voluteer = forwardRef((props, ref) => {
    const navigate = useNavigate();
    
    const [user, setUser] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [loading, setLoading] = useState(false);

    const handleInput = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post(`${BASE_URL}/api/volunteer_form/volunteer`, user, {
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (response.status === 200) {
                setUser({
                    name: "",
                    email: "",
                    message: "",
                });
                navigate("/home");
            }
            console.log(response);
        } catch (error) {
            console.error("Error in volunteer data submit:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div ref={ref} className='w-full h-auto pt-12 px-6 grid grid-cols-1 md:grid-cols-2 auto-cols-auto'>
            <div className='w-full h-full grid items-center'>
                <img className="w-full h-full object-cover" src={BeVolunteer} alt="Message" />
            </div>

            <div className='bg-slate-800'>
                <form className='w-full h-full flex flex-col justify-start items-center' onSubmit={handleSubmit}>
                    <h1 className='mb-7 mt-10 text-4xl text-orange-500 text-center'>Be A Volunteer</h1>

                    <div className='fields w-4/5 h-18 flex flex-col justify-center items-center'>
                        <input id="name" className="form_input w-full h-12" type="text" name='name' value={user.name} onChange={handleInput} autoComplete='off' required />
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className='fields w-4/5 h-18 pb-5 flex flex-col justify-center items-center'>
                        <input id="email" className="form_input w-full h-12" type="email" name='email' value={user.email} onChange={handleInput} autoComplete='off' required />
                        <label htmlFor="email">Email</label>
                    </div>

                    <div className='fields w-4/5 h-18 flex flex-col justify-center items-center'>
                        <textarea id="message" className="form_input w-full h-20" name='message' value={user.message} onChange={handleInput} autoComplete='off' placeholder='Message' required />
                        
                    </div>
                    <button className='locate mt-5 mb-5 w-36 h-12 bg-orange-500 text-white rounded-3xl' disabled={loading}>
                        {loading ? 'Submitting...' : 'Submit'}
                    </button>
                </form>
            </div>
        </div>
    );
});

export default Voluteer;
