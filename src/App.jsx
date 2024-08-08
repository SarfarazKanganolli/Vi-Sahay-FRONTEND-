import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';

const Home = lazy(() => import('./Pages/Home'));
const Donation = lazy(() => import('./Pages/Donation'));
const Message = lazy(() => import('./Pages/Message'));
const About = lazy(() => import('./Pages/About'));
const Contact = lazy(() => import('./Pages/Contact'));
const Page_NA = lazy(() => import('./Pages/Page_NA'));

const App = () => {
  return (
    <div className='w-full h-screen'>
      <BrowserRouter>
        <Header />
        <Suspense fallback={<div></div>}>
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
