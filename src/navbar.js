import "./css/navbar.css"
import { items } from "./config/env"
import logo from './medias/image/logojcdsite-220x95.png'
import iconA from './medias/image/icon_apTh.png'
import iconB from './medias/image/icon_apEn.png'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
    const { page } = props
    const bgColor = items.getColor.backgroundColor
    const homeTh = 'หน้าหลัก'
    const homeEn = 'HOME'
    const contactTh = 'ผู้ติดต่อ'
    const contactEn = 'CONTACTS'
    const mediaOfferA = 'ข้อเสนอสือโฆษณา'
    const mediaOfferB = 'AIRPORT'
    const mediaOfferC = 'AIRPORT'
    const mediaOfferD = 'MEDIA OFFER'
    return (
        <nav className="navbar navbar-expand-lg navbar-light " style={{ bgColor }} >
            <div className="container-fluid" >
                <img src={logo} alt="logo" />
                <button
                style={{color:'gray'}}
                    className="navbar-toggler bg-light"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation" >
                    <span className="navbar-toggler-icon " > </span>
                </button>
                <div className="collapse navbar-collapse col justify-content-end" id="navbarSupportedContent" >
                    <ul className="navbar-nav mt-4 ">
                        <li className="nav-item ">
                            <center >
                                <Link onClick={() => { page(false) }} to="/home" className="nav-link active text-light fs-6" aria-current="page"> {homeTh} < br /> {homeEn} </Link>
                            </center>
                        </li>
                        <li className="nav-item">
                            <center >
                                <Link onClick={() => { page(false) }} to="/contact" className="nav-link text-light fs-6 "> {contactTh} < br /> {contactEn} </Link>
                            </center>
                        </li>
                        <li className="nav-item">
                            <center >
                                < Link onClick={() => { page(false) }} to="/mediaOfferA" className="nav-link text-light fs-6 "> {mediaOfferA} < br /> {mediaOfferB} < br /> < img src={iconA} alt="icon" /></Link >
                            </center>
                        </li>
                        <li className="nav-item">
                            <center >
                                < Link onClick={() => { page(false) }} to="/mediaOfferB" className="nav-link text-light fs-6 "> {mediaOfferC} < br /> {mediaOfferD} < br /> < img src={iconB} alt="icon" /></Link >
                            </center>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar