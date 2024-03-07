import React from 'react'
import Layout from './components/Layout/Layout'
import About from './pages/About/About'
import Techstack from './pages/Tech stack/Techstack'
import Project from './pages/Projects/Project'
import Education from './pages/Education/Education'
import Work from './pages/Work/Work'
import Contact from './pages/Contact/Contact'

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
      
    </>
  )
}

export default App
