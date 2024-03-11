import React from 'react'
import './Project.css'


const Project = () => {
  return (
    <>
      <div className=' project'>
    
      <h2 className='col-12 mt-3 mb-1 text-center text-uppercase' id='project'>
        TOP RECENT PROJECTS
        </h2>
            <hr/>
            <p className='pb-3 text-center'>Here ,all my recent project

             </p>
             {/* card design */}
             
             <div className='row' id='ads'>
                <div className='col-md-4'>
                    <div className='card rounded'>
                        <div className='card-image'>
                            <span className='card-notify-badge'>
                                Full stack Devevloper</span>
                                <img src='data:image/jpeg;base64,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' alt="project1"/>

                        </div>
                        <div className='card-image-overly m-auto'>
                            <span className='card-detail-badge'>Node</span>
                            <span className='card-detail-badge'>Express</span>
                            <span className='card-detail-badge'>React</span>
                            

                        </div>
                        <div className='card-body text-center'>
                            <div className='ad-title m-auto'>
                                <h5 className='text-uppercase'>Educity</h5>

                            </div>
                            <a className='ads-btn'href='https://educity-react-app-w9lp.vercel.app/'>Demo View</a>
                            

                        </div>

                    </div>

                </div>
                <div className='col-md-4'>
                    <div className='card rounded'>
                        <div className='card-image'>
                            <span className='card-notify-badge'>
                                Html,Css,Javascript</span>
                                <img src='https://cdn2.imagine.art/imagine-frontend/assets/images/ExpandImage.webp' alt="project1"/>

                        </div>
                        <div className='card-image-overly m-auto'>
                            <span className='card-detail-badge'>Html</span>
                            <span className='card-detail-badge'>Css</span>
                            <span className='card-detail-badge'>Javascript</span>
                            <span className='card-detail-badge'>API</span>

                        </div>
                        <div className='card-body text-center'>
                            <div className='ad-title m-auto'>
                                <h5 className='text-uppercase'>Image Generator Application</h5>

                            </div>
                            <a className='ads-btn'href='https://github.com/SHIVAKUMAR-KS/Image-Generator-App'>Code View</a>
                            

                        </div>

                    </div>

                </div>
                <div className='col-md-4'>
                    <div className='card rounded'>
                        <div className='card-image'>
                            <span className='card-notify-badge'>
                                Python  Devevloper</span>
                                <img src='https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg' alt="project1"/>

                        </div>
                        <div className='card-image-overly m-auto'>
                            <span className='card-detail-badge'>Flask</span>
                            <span className='card-detail-badge'>qrcode</span>
                            <span className='card-detail-badge'>vs code</span>
                            <span className='card-detail-badge'>python interpreter</span>

                        </div>
                        <div className='card-body text-center'>
                            <div className='ad-title m-auto'>
                                <h5 className='text-uppercase'>QR Code Generator</h5>

                            </div>
                            <a className='ads-btn'href='https://github.com/SHIVAKUMAR-KS/QR_Generator'>Code View</a>
                            

                        </div>

                    </div>

                </div>
                
                
             </div>
        </div>
    </>
  )
}


export default Project
