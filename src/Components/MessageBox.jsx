import React, { useEffect,useState } from 'react';
import "../index.css";
import MessageImg from "../assets/disaster-1.jpg";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'
import BASE_URL from "../Services/helper.js"

const MessageBox = () => {

    useEffect(() => {
        AOS.init({
          duration:1000,
          once:true
        })
      }, [])

    const [messaging, setMessaging] = useState({
        name: "",
        phone_no: "",
        email: "",
        location: "",
        message: ""
    });

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const handleInput = (e) => {
        const { name, value } = e.target;

        if (name === 'phone_no' && value.length > 10) return;

        setMessaging({
            ...messaging,
            [name]: value,
        });
    };

    const handleLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            const locationUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
            const newLocation = `${locationUrl}\n\n${messaging.location}`;
            setMessaging(prevState => ({
                ...prevState,
                location: newLocation
            }));
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {
            const response = await axios.post(`${BASE_URL}/api/message`, messaging, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            console.log('Response:', response.data);
            if (response.status === 201) {
                setMessaging({
                    name: "",
                    phone_no: "",
                    email: "",
                    location: "",
                    message: ""
                });
                navigate("/home"); // Adjust path as needed
            }
        } catch (error) {
            console.error('Error submitting message:', error);
            // next(error)
        }finally {
            setLoading(false);
        }
    };

    return (
        
        <div data-aos="fade-up" className='w-full h-auto pt-12 px-6 grid grid-cols-1 md:grid-cols-2 auto-cols-auto'>
            <div className='w-full h-full grid items-center'>
                <img className="w-full h-full object-cover " src={MessageImg} alt="Message" />
            </div>

            <div className='bg-slate-800'>
                <form className='w-full h-full flex flex-col justify-start items-center' onSubmit={handleSubmit}>
                    <h1 className='mb-7 mt-10 text-4xl text-orange-500 text-center'>Message Here</h1>
                    
                    <div className='fields w-4/5 h-18 flex flex-col justify-center items-center'>
                        <input className="form_input w-full h-12" type="text" name='name' value={messaging.name} onChange={handleInput} autoComplete='off' required />
                        <label>Name</label>
                    </div>
                    <div className='fields w-4/5 h-18 flex flex-col justify-center items-center'>
                        <input className="form_input w-full h-12" type="number" name='phone_no' value={messaging.phone_no} onChange={handleInput} autoComplete='off' required />
                        <label>Phone-No:</label>
                    </div>
                    <div className='fields w-4/5 h-18 flex flex-col justify-center items-center'>
                        <input className="form_input w-full h-12" type="text" name='email' value={messaging.email} onChange={handleInput} autoComplete='off' required />
                        <label>Email</label>
                    </div>
                    <div className='fields w-4/5 h-18 flex flex-col justify-center items-center'>
                        <input className="form_input w-full h-12" type="text" name='location' value={messaging.location} onChange={handleInput} autoComplete='off' required />
                        <label>Location</label>
                    </div>

                    <div className='w-4/5 h-20 flex justify-start pb-10 '>
                         <button className="locate bg-orange-600 text-white w-2/5 rounded-3xl" type="button" onClick={handleLocation}>Add Location</button>
                    </div>

                   

                    <div className='fields w-4/5 h-18 flex flex-col justify-center items-center'>
                        <textarea className="form_input w-full h-20" name='message' value={messaging.message} onChange={handleInput} autoComplete='off' placeholder='Message' required />
                    </div>
                    <button className='locate mt-5 mb-5 w-36 h-12 bg-orange-600 text-white rounded-3xl' disabled={loading}>{loading ? 'Submitting...' : 'Submit'}</button>
                </form>
            </div>
        </div>
    );
}; 

export default MessageBox;
