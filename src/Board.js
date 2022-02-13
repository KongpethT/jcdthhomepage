import './css/board.css'
import { items } from './config/env'
import { useState } from 'react';
const Borad = () => {
    let myImg = []

    const num = 12;
    for (let i = 0; i < num; i++) {
        myImg[i] = `/BackgroundCompany/Slide${i + 1}.JPG`
    }
    return (
        <section style={{ margin: '0 auto' }}>
            <div className="slider">
                <ul>
                    {myImg.map((row, index) => {
                        return (
                            <li key={index} id={`no-js-slider-${index}`} className="slide">
                                <img src={row} alt='image' />
                                <a className="prev" href={(index === 0) ? `#no-js-slider-${index - 1}` : `#no-js-slider-${index - 1}`}>prev</a>
                                <a className="next" href={(index === 11) ? `#no-js-slider-${index - 11}` : `#no-js-slider-${parseInt(index + 1)}`}>next</a>
                            </li>
                        )
                    })}
                </ul>
                <br></br>
                <br></br>
                <br></br>

                <br></br>
                {/** 
                <ul>
                    <li id="no-js-slider-12" className="slide">
                        <img src='/BackgroundCompany/Slide12.JPG' alt='image' />
                        <a className="prev" href="#no-js-slider-11">prev</a>
                        <a className="next" href="#no-js-slider-1">next</a>
                    </li>
                    <li id="no-js-slider-2" className="slide">
                        <img src='/BackgroundCompany/Slide2.JPG' alt='image' />
                        <a className="prev" href="#no-js-slider-1">prev</a>
                        <a className="next" href="#no-js-slider-3">next</a>
                    </li>
                    <li id="no-js-slider-3" className="slide">
                        <img src='/BackgroundCompany/Slide3.JPG' alt='image' />
                        <a className="prev" href="#no-js-slider-2">prev</a>
                        <a className="next" href="#no-js-slider-4">next</a>
                    </li>
                    <li id="no-js-slider-4" className="slide">
                        <img src='/BackgroundCompany/Slide4.JPG' alt='image' />
                        <a className="prev" href="#no-js-slider-3">prev</a>
                        <a className="next" href="#no-js-slider-5">next</a>
                    </li>
                    <li id="no-js-slider-5" className="slide">
                        <img src='/BackgroundCompany/Slide5.JPG' alt='image' />
                        <a className="prev" href="#no-js-slider-4">prev</a>
                        <a className="next" href="#no-js-slider-6">next</a>
                    </li>
                    <li id="no-js-slider-6" className="slide">
                        <img src='/BackgroundCompany/Slide6.JPG' alt='image' />
                        <a className="prev" href="#no-js-slider-5">prev</a>
                        <a className="next" href="#no-js-slider-7">next</a>
                    </li>
                    <li id="no-js-slider-7" className="slide">
                        <img src='/BackgroundCompany/Slide7.JPG' alt='image' />
                        <a className="prev" href="#no-js-slider-6">prev</a>
                        <a className="next" href="#no-js-slider-8">next</a>
                    </li>
                    <li id="no-js-slider-8" className="slide">
                        <img src='/BackgroundCompany/Slide8.JPG' alt='image' />
                        <a className="prev" href="#no-js-slider-7">prev</a>
                        <a className="next" href="#no-js-slider-9">next</a>
                    </li>
                    <li id="no-js-slider-9" className="slide">
                        <img src='/BackgroundCompany/Slide9.JPG' alt='image' />
                        <a className="prev" href="#no-js-slider-8">prev</a>
                        <a className="next" href="#no-js-slider-10">next</a>
                    </li>
                    <li id="no-js-slider-10" className="slide">
                        <img src='/BackgroundCompany/Slide10.JPG' alt='image' />
                        <a className="prev" href="#no-js-slider-9">prev</a>
                        <a className="next" href="#no-js-slider-11">next</a>
                    </li>
                    <li id="no-js-slider-11" className="slide">
                        <img src='/BackgroundCompany/Slide11.JPG' alt='image' />
                        <a className="prev" href="#no-js-slider-10">prev</a>
                        <a className="next" href="#no-js-slider-12">next</a>
                    </li>
                    <li id="no-js-slider-1" className="slide">
                        <img src='/BackgroundCompany/Slide1.JPG' alt='image' />
                        <a className="prev" href="#no-js-slider-1">prev</a>
                        <a className="next" href="#no-js-slider-2">next</a>
                    </li>
                </ul>
                */}
            </div>
        </section >
    )
}

export default Borad