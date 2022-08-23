//import './css/contact.css'
import { FaPhone, FaFax } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import React, { useEffect, useState } from "react";
import Footer from "./components/Footer";

const Contact = () => {
    const [is_width_screen, set_width_screen] = useState(window.innerWidth)
    const changeLanguage = (id) => {
        const th = document.getElementById('th')
        const en = document.getElementById('en')
        if (id === 'th') {
            th.classList.remove('hident')
            en.classList.add('hident')
        }
        if (id === 'en') {
            en.classList.remove('hident')
            th.classList.add('hident')
        }
    }
    window.addEventListener('resize', () => {
        set_width_screen(window.innerWidth)
    })
    useEffect(() => {
        const contact_hd = document.getElementById('contact-hd1')
        if (is_width_screen < 575) {
            contact_hd.classList.add('hident')
        } else {
            contact_hd.classList.remove('hident')
        }
    }, [is_width_screen])
    return (
        <div>
            <div className="contact-bar">
                <div className="row">
                    <div
                        className="text-nowrap col-sm-2">
                        <p id='contact-hd1' className="contacts-header">ติดต่อ – Contacts</p>
                    </div>
                    <div
                        className="col-sm-10 text-nowrap d-flex flex-row justify-content-end">
                        <p id='contact-hd2' className="contacts-header">JCDecaux Thailand ติดต่อ – Contacts <span className="language" onClick={() => { changeLanguage('th') }}>TH</span> / <span className="language" onClick={() => { changeLanguage('en') }}>EN</span></p>
                    </div>
                </div>
            </div>
            <div className='boxes_view_contact'>
                <div className="row">
                    <div id="en" className="col-12 bg-light text-secondary mt-5">
                        <div className='px-5 py-5 language-en'>
                            <p className=''>3 Rajanakarn Building, 21st Floor, South Sathorn Road, Yannawa, Sathorn, Bangkok, Thailand 10120</p>
                            <p className=''> <FaPhone className='text-dark' /> Tel: (+662) 676 7655-64</p>
                            <p className=''> <FaFax className='text-dark' /> Fax:(+662) 676 7667</p>
                            <p>
                                Mr. Arnaud Marie, Michel de Ruffray – Managing Director -
                                <HiMail className='text-dark' /> <a href='mailto:Arnaud.deruffray@jcdecaux.com' className='email'>
                                    Arnaud.deruffray@jcdecaux.com
                                </a>
                            </p>
                            <p>
                                Ms. Atiporn Lertskulsomboon – Finance & Accounting Director & Human Resource -
                                <HiMail className='text-dark' /> <a href='mailto:AtipornL@jcdecaux.com' className='email'>
                                    AtipornL@jcdecaux.com
                                </a>
                            </p>
                            <p>
                                Ms. Chantana Arschariyawinyoo – General Manager Airport, Sales & Marketing -
                                <HiMail className='text-dark' /> <a href='mailto:ChantanaA@jcdecaux.com' className='email'>
                                    ChantanaA@jcdecaux.com
                                </a>
                            </p>
                            <p>
                                Mr. Theera Sriboonwong – Operations Director -
                                <HiMail className='text-dark' /> <a href='mailto:TheeraS@jcdecaux.com' className='email'>
                                    TheeraS@jcdecaux.com
                                </a>
                            </p>
                            <p>
                                Ms. Panadda Deesiri – HR & Administration Manager –
                                <HiMail className='text-dark' /> <a href='mailto:PanaddaD@jcdecaux.com' className='email'>
                                    PanaddaD@jcdecaux.com
                                </a>
                            </p>
                        </div>
                    </div >
                </div>
                <div className="row">
                    <div id="th" className="col-12 bg-light text-secondary mt-5 hident">
                        <div className='px-5 py-5 language-th'>
                            <p className=''>เลขที่ 3 อาคารรัจนาการ ชั้น 21 ถนนสาทรใต้ แขวงยานนาวา เขตสาทร กรุงเทพฯ ประเทศไทย 10120</p>
                            <p className=''> <FaPhone className='text-dark' /> โทร (+662) 676 7655-64</p>
                            <p className=''> <FaFax className='text-dark' /> แฟกซ์ (+662) 676 7667</p>
                            <p className=''>
                                นายอาร์โนลด์ มารี มิเชล เดอ รุฟเฟรย์ – กรรมการผู้จัดการ -
                                <a href='mailto:Arnaud.deruffray@jcdecaux.com' className='email'>
                                    <HiMail className='text-dark' /> Arnaud.deruffray@jcdecaux.com
                                </a>
                            </p>
                            <p className=''>
                                นางสาวอติพร เลิศสกุลสมบูรณ์ – ผู้อำนวยการฝ่ายการเงิน,บัญชี และบุคคล -
                                <a href='mailto:AtipornL@jcdecaux.com' className='email'>
                                    <HiMail className='text-dark' /> AtipornL@jcdecaux.com
                                </a>
                            </p>
                            <p className=''>
                                นางสาวฉันทนา อัจฉริยวิญญู – ผู้จัดการทั่วไปฝ่ายสนามบิน การขาย และการตลาด -
                                <a href='mailto:ChantanaA@jcdecaux.com' className='email'>
                                    <HiMail className='text-dark' /> ChantanaA@jcdecaux.com
                                </a>
                            </p>
                            <p className=''>
                                นายธีระ ศรีบุญวงศ์ – ผู้อำนวยการฝ่ายปฏิบัติการ -
                                <a href='mailto:TheeraS@jcdecaux.com' className='email'>
                                    <HiMail className='text-dark' /> TheeraS@jcdecaux.com
                                </a>
                            </p>
                            <p className=''>
                                นางสาวปนัดดา ดีศิริ – ผู้จัดการฝ่ายบุคคลและธุรการ –
                                <a href='mailto:PanaddaD@jcdecaux.com' className='email'>
                                    <HiMail className='text-dark' /> PanaddaD@jcdecaux.com
                                </a>
                            </p>
                        </div>
                    </div >
                </div>
            </div >
            <Footer />
        </div >
    )
}

export default Contact