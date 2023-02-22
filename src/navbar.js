import React from "react"
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light "  >
                <div className="container-fluid" >
                    <img src='image/logojcdsite-220x95.png' alt="logo" />
                    <button
                        style={{ color: 'gray' }}
                        className="navbar-toggler bg-light"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation" >
                        <span className="navbar-toggler-icon" > </span>
                    </button>
                    <div className="collapse navbar-collapse col justify-content-end" id="navbarSupportedContent" >
                        <ul className="navbar-nav mt-4">
                            <li className="nav-item ">
                                <center>
                                    <a href="/" className="nav-link active text-light fs-6" aria-current="page">
                                        <p>หน้าหลัก < br /> HOME </p>
                                    </a>
                                </center>
                            </li>
                            <li className="nav-item">
                                <center >
                                    <a href="/contact" className="nav-link text-light fs-6 ">
                                        <p>ผู้ติดต่อ< br /> CONTACTS</p>
                                    </a>
                                </center>
                            </li>
                            <li className="nav-item">
                                <center >
                                    < a href="/media offer th" className="nav-link text-light fs-6 ">
                                        <p> ข้อเสนอสื่อโฆษณา < br /> AIRPORT < br />< img src='image/icon_apTh.png' alt="icon" /></p>
                                    </a>
                                </center>
                            </li>
                            <li className="nav-item">
                                <center >
                                    < a href="/media offer en" className="nav-link text-light fs-6 ">
                                        <p>AIRPORT < br /> MEDIA OFFER < br /> < img src='image/icon_apEn.png' alt="icon" /></p>
                                    </a >
                                </center>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

const Footer = (props) => {

    return (
        <>
            <div className="footer" >
                <p >JCDecaux (Thailand) copyright© 2022</p>
                <p><a className='text-light alink ' href='/pdpa-internal'>นโยบายข้อมูลส่วนบุคคล</a></p>
            </div>
        </>
    )
}
const menu = {
    top_bar: Navbar,
    bottom_bar: Footer
}
export { menu }