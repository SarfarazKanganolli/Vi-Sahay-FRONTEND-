import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Lenis from "lenis";
import gsap from "gsap";
import Spinner from './Components/Spinner';

const Home = lazy(() => import('./Pages/Home'));
const Donation = lazy(() => import('./Pages/Donation'));
const Message = lazy(() => import('./Pages/Message'));
const About = lazy(() => import('./Pages/About'));
const Contact = lazy(() => import('./Pages/Contact'));
const Page_NA = lazy(() => import('./Pages/Page_NA'));

const App = () => {

  useEffect(() => {
  const lenis = new Lenis({
    lerp: 0.1,
    duration: 1.2,
    smoothWheel: true,
  });

  const rafCallback = (time) => {
    lenis.raf(time * 5000); // GSAP gives seconds, Lenis expects ms
  };

  gsap.ticker.add(rafCallback);

  return () => {
    gsap.ticker.remove(rafCallback);
    lenis.destroy();
  };
}, []);

  return (
    <div className='w-full h-screen'>
      <BrowserRouter>
   
        <Suspense fallback={<Spinner/>}>
             <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/donation" element={<Donation />} />
            <Route path="/message" element={<Message />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Page_NA/>} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default App;
