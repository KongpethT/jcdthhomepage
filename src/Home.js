

import Footer from './components/Footer'
import { Link } from 'react-router-dom'
import React, { useState } from "react"

const Home = (props) => {
    const reduce_screen_size = 180
    const [is_height_screen, set_height_screen] = useState(window.innerHeight)
    window.addEventListener('resize', () => {
        //console.log(window.innerHeight > 564);
        if (window.innerHeight > 564) {
            //document.querySelector('body').classList.add('bg-success')
            set_height_screen(window.innerHeight)
        }
    })
    return (
        <div>
            <div
                className='boxes'
                style={{ height: (is_height_screen - reduce_screen_size), overflowY: "auto" }} >
                <div className="row">
                    {/**left content */}
                    <div className='col-3 left'>
                        <div>
                            <div
                                className='d-flex flex-row justify-content-end mb-2'>
                                <Link to='/board'><img src='image/page_link1.png' alt="img" className='picture-auto' />
                                </Link>
                            </div>
                        </div>
                        <div>
                            <div
                                className='d-flex flex-row justify-content-end'>
                                <a target="_blank" rel="noreferrer noopener" href='https://www.jcdecaux.com/our-presence'>
                                    <img src='image/page_link2.png' alt="img" className='picture-auto' />
                                </a>
                            </div>
                        </div>
                    </div>
                    {/**vdeo content */}
                    <div className='col-5 center'>
                        <div className='d-flex justify-content-center'>
                            <video width="100%" controls data-autoplay preload="true" loop muted={true} autoPlay >
                                <source src='video/JCD_24MB.mp4' type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                    {/**right content */}
                    <div className='col-3 right'>
                        <div className="d-flex justify-content-start mb-2">
                            <div
                                className='auto'>
                                <a target="_blank" rel="noreferrer noopener" href='https://www.jcdecaux.com/'>
                                    <img src='image/page_link3.png' alt="img" className='picture-auto' />
                                </a>
                            </div>
                        </div>
                        <div className="d-flex justify-content-start">
                            <div
                                className=''>
                                <a target="_blank" rel="noreferrer noopener" href='https://www.jcdecaux.com/about-us#aboutjcdecaux'>
                                    <img src='image/page_link4.png' alt="img" className='picture-auto' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home