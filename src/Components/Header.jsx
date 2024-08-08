import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'; // Import useNavigate
import Menu from "../assets/menu.png";
import Close from "../assets/close.png";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [show, handleShow] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const toggleMenu = () => {
    setOpen(!open);
  };

  const transition = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  const handleClick = (path) => {
    setOpen(false);
    navigate(path); // Use navigate function for navigation
  };

  useEffect(() => {
    window.addEventListener("scroll", transition);
    return () => {
      window.removeEventListener("scroll", transition);
    };
  }, []);

  return (
    <>
      <div className={`nav ${show && 'nav_black'} ${open && 'nav_responsive'} w-full flex justify-between py-6 px-5 z-10 text-2xl`}>
        <div className='nav_heading'>
          <h1 className='text-orange-500 pl-10'>Vi-Sahay</h1>
          <span className='menu_icon' onClick={toggleMenu}>
            {open ? <img src={Close} alt="Close Menu" /> : <img src={Menu} alt="Open Menu" />}
          </span>
        </div>

        <div className={`nav_links ${open ? 'block' : 'hidden'} flex gap-10 px-10`}>
          {['Home', 'Donation', 'Message', 'About', 'Blog', 'Contact'].map((item, index) => (
            <NavLink 
              key={index}
              to={`/${item.toLowerCase()}`} // Correctly format the path
              onClick={() => handleClick(`/${item.toLowerCase()}`)}
              className={`nav_hover ${show && 'nav_text'} ${open && 'nav_res_text'} text-white cursor-pointer px-5 align-middle`}
            >
              {item}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
