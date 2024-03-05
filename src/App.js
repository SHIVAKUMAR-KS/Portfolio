import React from 'react'
import Layout from './components/Layout/Layout'
import About from './pages/About/About'
import Techstack from './pages/Tech stack/Techstack'

const App = () => {
  return (
    <>
      <Layout/>
      <div className='containers'>
          <About/>
          <Techstack/>
      </div>
      
    </>
  )
}

export default App
