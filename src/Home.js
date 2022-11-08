
import React from "react"
const Home = (props) => {

    return (
        <>
            <div className='container' style={{marginTop:'5%'}}>
                <div className='row justify-content-center'>
                    <div className='col-3 align-self-start'>
                        <div className='d-flex flex-row justify-content-end mb-2'>
                            <a href='/board'><img src='image/page_link1.png' alt="img" className='picture-auto' /></a>
                        </div>
                        <div className='d-flex flex-row justify-content-end'>
                            <a target="_blank" rel="noreferrer noopener" href='https://www.jcdecaux.com/our-presence'>
                                <img src='image/page_link2.png' alt="img" className='picture-auto' />
                            </a>
                        </div>
                    </div>
                    <div className='col-6 align-self-center'>
                        <div className='d-flex justify-content-center'>
                            <video width="100%" controls data-autoplay preload="true" loop muted={true} autoPlay >
                                <source src='video/JCD_24MB.mp4' type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                    <div className='col-3 align-self-end'>
                        <div className='d-flex flex-row justify-content-end mb-2'>
                            <a target="_blank" rel="noreferrer noopener" href='https://www.jcdecaux.com/'>
                                <img src='image/page_link3.png' alt="img" className='picture-auto' />
                            </a>
                        </div>
                        <div className='d-flex flex-row justify-content-end'>
                            <a target="_blank" rel="noreferrer noopener" href='https://www.jcdecaux.com/about-us#aboutjcdecaux'>
                                <img src='image/page_link4.png' alt="img" className='picture-auto' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home