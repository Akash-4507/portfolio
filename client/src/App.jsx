import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
 import Profile from './pages/Profile'; 
import Project from './pages/Project';
import Contact from './pages/Contact';
import Login from './pages/Login';

const App = () => {
  return (
    <>
      {/* <Navbar /> */}
      <BrowserRouter>
        <Routes>
           <Route path="/" element={<Profile />} /> 
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;