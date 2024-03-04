import React from 'react'
import './Menus.css'
import {FcAbout, FcHome} from 'react-icons/fc'
import {MdBiotech} from 'react-icons/md'
import { BsPersonWorkspace } from "react-icons/bs";
import { FaBookReader } from "react-icons/fa";
import { GiFilmProjector } from "react-icons/gi";
import { FcDebt } from "react-icons/fc";
import { MdConnectWithoutContact } from "react-icons/md";




const Menus = ({toggle}) => {
  return (
    <>
    {toggle ? (
        <>
        <div className='nav-profile-pic'>
            <img src="https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw" alt='profile pic' />
        </div>
        <div className='nav-items'>
            <div className='nav-item'>
                <div className='nav-link'>
                    <FcHome />
                    Home
                </div>
                <div className='nav-link'>
                 <FcAbout />
                    About
                </div>
                <div className='nav-link'>
                <BsPersonWorkspace />
                    Work Experinence
                </div>
                <div className='nav-link'>
                <MdBiotech/>
                    Tech Stack
                </div>
                <div className='nav-link'>
                <FaBookReader />
                    Education
                </div>
                
                <div className='nav-link'>
                <GiFilmProjector />
                    Project
                </div>
                <div className='nav-link'>
                <FcDebt />
                    Testimonial
                </div>
                <div className='nav-link'>
                <MdConnectWithoutContact />
                    Contact
                </div>

            </div>
            
        </div>
        </>
    ):(
        <>
        <div className='nav-items'>
            <div className='nav-item'>
                <div className='nav-link'>
                    <FcHome title='Home'/>
                    
                </div>
                <div className='nav-link'>
                 <FcAbout title='About'/>
                    
                </div>
                <div className='nav-link'>
                <BsPersonWorkspace title='Work Experinece'/>
                    
                </div>
                <div className='nav-link'>
                <MdBiotech title='Tech stack'/>
                    
                </div>
                <div className='nav-link'>
                <FaBookReader title='Education'/>
                    
                </div>
                
                <div className='nav-link'>
                <GiFilmProjector title='Project'/>
                    
                </div>
                <div className='nav-link'>
                <FcDebt title='Testimonial'/>
                    
                </div>
                <div className='nav-link'>
                <MdConnectWithoutContact title='Contact' />
                    
                </div>

            </div>
            
        </div>
        </>
    )}
        

    </>
  )
}

export default Menus
