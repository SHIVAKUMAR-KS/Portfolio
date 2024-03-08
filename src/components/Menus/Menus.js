import React from 'react'
import './Menus.css'
import { Link} from 'react-scroll';
import {FcAbout, FcHome} from 'react-icons/fc'
import {MdBiotech} from 'react-icons/md'
import { BsPersonWorkspace } from "react-icons/bs";
import { FaBookReader } from "react-icons/fa";
import { GiFilmProjector } from "react-icons/gi";
import { FcDebt } from "react-icons/fc";
import { MdConnectWithoutContact } from "react-icons/md";
import Zoom from 'react-reveal/Zoom';



const Menus = ({toggle}) => {
  return (
    <>
    {toggle ? (
        <>
        <Zoom>
            <div className='nav-profile-pic'>
            <img src="https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw" alt='profile pic' />
        </div>
        </Zoom>
        
        <div className='nav-items'>
            <div className='nav-item'>
                <div className='nav-link'>
                    <Link 
                    to='home' 
                    spy={true} 
                    smooth={true} 
                    offset={-100} duration={100}
                    >
                    <FcHome />
                    Home
                    </Link>
                    
                </div>
                <div className='nav-link'>
                    <Link 
                    to='about' 
                    spy={true} 
                    smooth={true} 
                    offset={-100} duration={100}
                    >
                    <FcAbout />
                    About
                    </Link>
                 
                </div>
                <div className='nav-link'>
                    <Link
                    to='education' 
                    spy={true} 
                    smooth={true} 
                    offset={-100} duration={100}
                    >
                    <FaBookReader />
                    Education
                    </Link>
                
                </div>
                
                
                <div className='nav-link'>
                    <Link
                    to='techstack' 
                    spy={true} 
                    smooth={true} 
                    offset={-100} duration={100}
                    >
                    <MdBiotech/>
                    Tech Stack
                    </Link>
                
                </div>
               
                <div className='nav-link'>
                    <Link
                    to='project' 
                    spy={true} 
                    smooth={true} 
                    offset={-100} duration={100}
                    >
                <GiFilmProjector />
                    Project
                    </Link>
                </div>
                <div className='nav-link'>
                    <Link
                    to='work-exp' 
                    spy={true} 
                    smooth={true} 
                    offset={-100} 
                    duration={100}
                    >
                <BsPersonWorkspace />
                    Work Experinence  
                    </Link>
                </div>
                
                <div className='nav-link'>
                    <Link
                    to='contact' 
                    spy={true} 
                    smooth={true} 
                    offset={-100} duration={100}
                    >
                    <MdConnectWithoutContact />
                    Contact
                    </Link>
                
                </div>

            </div>
            
        </div>
        </>
    ):(
        <>
        <div className='nav-items'>
            <div className='nav-item'>
                <div className='nav-link'>
                <Link 
                    to='home' 
                    spy={true} 
                    smooth={true} 
                    offset={-100} duration={100}
                    >
                    <FcHome />
                    
                    </Link>
                    
                </div>
                <div className='nav-link'>
                <Link 
                    to='about' 
                    spy={true} 
                    smooth={true} 
                    offset={-100} duration={100}
                    >
                    <FcAbout />
                    
                    </Link>
                    
                </div>
                <div className='nav-link'>
                <Link
                    to='education' 
                    spy={true} 
                    smooth={true} 
                    offset={-100} duration={100}
                    >
                    <FaBookReader />
                    
                    </Link>
                    
                </div>
                
                <div className='nav-link'>
                <Link
                    to='techstack' 
                    spy={true} 
                    smooth={true} 
                    offset={-100} duration={100}
                    >
                    <MdBiotech/>
                     
                    </Link>
                    
                </div>
               
                
                <div className='nav-link'>
                <Link
                    to='project' 
                    spy={true} 
                    smooth={true} 
                    offset={-100} duration={100}
                    >
                <GiFilmProjector />
                    
                    </Link>
                    
                </div>
                <div className='nav-link'>
                <Link
                    to='work-exp' 
                    spy={true} 
                    smooth={true} 
                    offset={-100} 
                    duration={100}
                    >
                <BsPersonWorkspace />
                       
                    </Link>
                    
                </div>
               
                <div className='nav-link'>
                <Link
                    to='contact' 
                    spy={true} 
                    smooth={true} 
                    offset={-100} duration={100}
                    >
                    <MdConnectWithoutContact />
                    
                    </Link>
                    
                </div>

            </div>
            
        </div>
        </>
    )}
        

    </>
  )
}

export default Menus
