import React from 'react'
import Layout from './components/Layout/Layout'
import About from './pages/About/About'

const App = () => {
  return (
    <>
      <Layout/>
      <div className='containers'>
          <About/>
      </div>
      
    </>
  )
}

export default App
