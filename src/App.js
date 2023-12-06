
import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Jobs from './pages/Jobs'
import HotJobs from './pages/HotJobs'
import Contact from './pages/Contact';
import TopCompany from './pages/TopCompany';

import { useDarkMode } from "./DarkModeContent";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageContent from './components/PageContent'
function App() {

  const {darkMode, toggleDarkMode} = useDarkMode();

  return (
  


        <div className={`h-full w-full mx-auto py-2 
        ${darkMode ? "dark" : ""}`}>
         <BrowserRouter>
            <Navbar/>
            <PageContent/>
            <Footer/>
         </BrowserRouter>
        </div>

  );
}

export default App;
