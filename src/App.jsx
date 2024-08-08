import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';

const Home = lazy(() => import('./Pages/Home'));
const Donation = lazy(() => import('./Pages/Donation'));
const Message = lazy(() => import('./Pages/Message'));
const About = lazy(() => import('./Pages/About'));
const Contact = lazy(() => import('./Pages/Contact'));
const Blog = lazy(() => import('./Pages/Blog'));

const App = () => {
  return (
    <div className='w-full h-screen'>
      <BrowserRouter>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/donation" element={<Donation />} />
            <Route path="/message" element={<Message />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Blog />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default App;
