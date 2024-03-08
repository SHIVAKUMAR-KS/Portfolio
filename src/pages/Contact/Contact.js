import React from 'react'
import './Contact.css'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Contact = () => {
  return (
    <>
    <div className='contact' id='contact'>
        <div className='card card0 border-0'>
            <div className='row'>
                <div className='col-md-c ol-lg-6 col-xk-6 col-sm-12'>
                    <div className='card1'>
                        <div className='row border-line'>
                            <img src='https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg' alt='contact'/>

                        </div>

                    </div>

                </div>
                <div className='col-lg-6 col-md-6'>
                    <div className='row'>
                        <div className='card2 d-flex card border-0 px-4 py-5'>
                            <h6>Contact With 
                            <FaLinkedin color='blue' size={30}className='ms-2'/>
                            <FaGithub color='black' size={30}className='ms-2'/>
                            <FaFacebook color='blue' size={30}className='ms-2'/>
                            </h6>

                        </div>
                        <div className='row px-3 mb-4'>
                            <div className='line'/>
                            <small className='pr text-center'>OR</small>
                            <div className='line'/>

                        </div>
                        <div className='row px-3'>
                            <input 
                            type='text'
                            name='name' 
                            placeholder='write your Name' 
                            className='mb-3'/>

                        </div>
                        <div className='row px-3'>
                            <input 
                            type='email'
                            name='email' 
                            placeholder='enter your emil' 
                            className='mb-3'/>

                        </div>
                        <div className='row px-3'>
                            <textarea
                            type='text'
                            name='name' 
                            placeholder='write your Name' 
                            className='mb-3'
                            
                            />
                            

                        </div>
                        <div className='row px-3'>
                            <button className='button' type='submit'>
                                send message
                            </button>
                            

                        </div>


                    </div>

                </div>

            </div>

        </div>

    </div>
    </>
  )
}

export default Contact
