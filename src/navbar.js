import { items } from "./config/env"
import logo from './medias/image/logojcdsite-220x95.png'
import iconA from './medias/image/icon_apTh.png'
import iconB from './medias/image/icon_apEn.png'
import React from "react"

const Navbar = () => {
    const bgColor = items.getColor.backgroundColor
    const homeTh = 'หน้าหลัก'
    const homeEn = 'HOME'
    const contactTh = 'ผู้ติดต่อ'
    const contactEn = 'CONTACTS'
    const mediaOfferA = 'ข้อเสนอสื่อโฆษณา'
    const mediaOfferB = 'AIRPORT'
    const mediaOfferC = 'AIRPORT'
    const mediaOfferD = 'MEDIA OFFER'
    /*const pdpa_mouse_over = () => {
        document.getElementById('pdpa_menu').classList.add('mitions')
        document.getElementById('pdpa_menu').classList.remove('d-none')
    }
    const pdpa_mouse_out = () => {
        document.getElementById('pdpa_menu').classList.add('mitions')
        document.getElementById('pdpa_menu').classList.add('d-none')
    }*/
    return (
        <nav className="navbar navbar-expand-lg navbar-light " style={{ bgColor }} >
            <div className="container-fluid" >
                <img src={logo} alt="logo" />
                <button
                    style={{ color: 'gray' }}
                    className="navbar-toggler bg-light"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation" >
                    <span className="navbar-toggler-icon btn-sm" > </span>
                </button>
                <div className="collapse navbar-collapse col justify-content-end" id="navbarSupportedContent" >
                    <ul className="navbar-nav mt-4">
                        <li className="nav-item ">
                            <center>
                                <a href="/home" className="nav-link active text-light fs-6" aria-current="page">
                                    <p>{homeTh} < br /> {homeEn} </p>
                                </a>
                            </center>

                        </li>
                        <li className="nav-item">
                            <center >
                                <a href="/contact" className="nav-link text-light fs-6 ">
                                    <p> {contactTh} < br /> {contactEn} </p>
                                </a>
                            </center>
                        </li>
                        <li className="nav-item">
                            <center >
                                < a href="/media_Offer_th" className="nav-link text-light fs-6 ">
                                    <p> {mediaOfferA} < br /> {mediaOfferB} < br />< img src={iconA} alt="icon" /></p>
                                </a>
                            </center>
                        </li>
                        <li className="nav-item">
                            <center >
                                < a href="/media_Offer_en" className="nav-link text-light fs-6 ">
                                    <p>{mediaOfferC} < br /> {mediaOfferD} < br /> < img src={iconB} alt="icon" /></p>
                                </a >
                            </center>
                        </li>
                        
                       {/*<li className="nav-itemx" onMouseOver={pdpa_mouse_over} onMouseOut={pdpa_mouse_out}>
                            <center >
                                < a href="#" className="nav-link text-light fs-6 ">
                                    <p>{pdpa_th} < br /> {pdpa} < br /> < img height={30} src={iconPDPA} alt="icon" /></p>
                                </a>
                                <ul id='pdpa_menu' className="d-none">
                                    <li className="nav-item col-12 text-light text-center" >
                                        <a className="text-light" href='/pdpa/?name=PrivacyPolicyForInternalStakeholder'>Privacy Policy For Internal Stakeholder</a>
                                    </li>
                                    <li className="nav-item col-12 text-light text-center">
                                        <a className="text-light" href='/pdpa/?name=PrivacyPolicyForExternalStakeholder'>Privacy Policy for External Stakeholder</a>
                                    </li>
                                    <li className="col-12 text-light text-center">
                                        <a className="text-light" href='/pdpa/?name=CCTVPrivacyNotice'>CCTV Privacy Notice</a>
                                    </li>
                                </ul>
                            </center>
                        </li>*/}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar