import React from 'react'
import Layout from './components/Layout/Layout'
import About from './pages/About/About'
import Techstack from './pages/Tech stack/Techstack'
import Project from './pages/Projects/Project'
import Education from './pages/Education/Education'
import Work from './pages/Work/Work'
import Contact from './pages/Contact/Contact'
import ScrollToTop from "react-scroll-to-top";

const App = () => {
  return (
    <>
      <Layout/>
      <div className='containers'>
          <About/>
          <Education/>
          <Techstack/>
          <Project/>
          <Work/>
          <Contact/>
      </div>
      <div className='footer mb-3 ms-3'>
        <h4 className='text-center'>
          Made with Shiva❤️ &copy; 2024

        </h4>
      </div>
      <ScrollToTop smooth color='orange' style={{background:'#1e1e2c',borderRadius:'80px'}}/>
      
    </>
  )
}

export default App
