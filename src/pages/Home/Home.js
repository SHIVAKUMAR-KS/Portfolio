import React from 'react'
import { useTheme } from '../../context/ThemeContext';
import { LuMoonStar } from "react-icons/lu";

import './Home.css'
import Typewriter from 'typewriter-effect';
import Resume from '../../asssets/docs/Solution.pdf'
import Hired from '../../asssets/docs/Question.pdf'
import { IoSunny } from "react-icons/io5";

const Home = () => {
  const [theme, setTheme] = useTheme();
  //handle theme to shift theme
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };

  return (
    <>
      <div className='container-fluid home-container' id='home'>
        <div className='theme-btn' onClick={handleTheme}>
          {theme ==='light' ?(
          <LuMoonStar size={30}/>
          ):(
          <IoSunny size={30}/>
          )}
        </div>
        <div className='container home-content'>
          <h2>Hi 👋I'm a</h2>
          <h1>
          <Typewriter
            options={{
              strings: [
                'FullStack Developer !',
                'Mern Stack Developer !'],
              autoStart: true,
              loop: true,
            }}
          />

          </h1>
          <div className='home-buttons'>

            <a 
            className='btn btn-hire' 
            href="https://api.whatsapp.com/send?phone=9155563895"
            rel='noreferrer'
            target='_blank'    
                    >
              Hire Me
              </a>
            <a className='btn btn-cv' href={Resume} download="Your_name.pdf">My Resume</a>

          </div>
        </div>
      </div>
    </>
  )
}

export default Home
