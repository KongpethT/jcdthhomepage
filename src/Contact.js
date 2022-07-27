//import './css/contact.css'
import { FaPhone, FaFax } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import React, { useState } from "react";

const Contact = () => {
    const reduce_screen_size = 180
    const [is_height_screen, set_height_screen] = useState(window.innerHeight)
    window.addEventListener('resize', () => {
        set_height_screen(window.innerHeight)
    })
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
    return (
        <div>
            <div className='boxes'
                style={{ height: (is_height_screen - reduce_screen_size), overflowY: "auto" }}>
                <div className="row bg-secondary pt-3">
                    <div
                        className="col-3 text-nowrap"
                        style={{ minWidth: '180px' }}>
                        <p className="contacts-header">ติดต่อ – Contacts</p>
                    </div>
                    <div
                        className="col-9 text-nowrap d-flex flex-row justify-content-end">
                        <p className="contacts-header">JCDecaux Thailand ติดต่อ – Contacts <span className="language" onClick={() => { changeLanguage('th') }}>TH</span> / <span className="language" onClick={() => { changeLanguage('en') }}>EN</span></p>
                    </div>
                </div>

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
            <div className='row'>
                <div className="col-12">
                    <div className='mt-4 '>
                        <p>JCDecaux (Thailand) copyright© 2022</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Contact