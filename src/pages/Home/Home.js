import React from 'react'
import './Home.css'
import Typewriter from 'typewriter-effect';
import Resume from '../../asssets/docs/Solution.pdf'
import Hired from '../../asssets/docs/Question.pdf'

const Home = () => {
  return (
    <>
      <div className='container-fluid home-container'>
        <div className='container home-content'>
          <h1>Hi I'm a</h1>
          <h2>
          <Typewriter
            options={{
              strings: [
                'FullStack Developer !',
                'Mern Stack Developer !'],
              autoStart: true,
              loop: true,
            }}
          />

          </h2>
          <div className='home-buttons'>
            <a className='btn btn-hire' href={Hired} download="Your_cv.pdf">Hire Me</a>
            <a className='btn btn-cv' href={Resume} download="Your_name.pdf">My Resume</a>

          </div>
        </div>
      </div>
    </>
  )
}

export default Home
