import React from 'react'
import './About.css'
import pic from '../../asssets/images/shiva.jpeg'


const About = () => {
  return (
    <>
      <div className='about' id='about'>
        <div className='row'>
            <div className='col-md-6 col-xl-3 col-lg-20 col-xs-30 about-img'>
                <img
                src={pic}
                alt='profile_pic'/>

            </div>
            <div className='col-md-6 about-content'>
                <h1>About me</h1>
                <p>
                  <b>A passionate software developer from India</b>
                  <hr/>
                    Welcome to my corner of the digital world! I'm a passionate second-year Computer Science student with a flair for crafting innovative solutions. My journey into the realm of technology began with a curiosity-driven exploration of coding languages and problem-solving methodologies.
                    
                </p>
            </div>

        </div>
      </div>
    </>
  )
}

export default About
