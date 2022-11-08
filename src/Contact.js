import React, { useEffect, useState } from "react";
import { config } from "./configuration/config"

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
        <>
            <div className='container' style={{ backgroundColor: config.colors.dark, paddingTop: '10px' }}>
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

            <div className="container">
                <div className="row">
                    <div id="en" className="col-12 text-secondary mt-5">
                        <div className='px-5 py-5 language-en'>
                            <p className='fs-5'>
                                3 Rajanakarn Building, 21st Floor, South Sathorn Road, Yannawa, Sathorn, Bangkok, Thailand 10120
                                <br />Tel: (+662) 676 7655-64, Fax:(+662) 676 7667
                            </p>
                            <p className="mx-5">
                                Mr. Arnaud Marie, Michel de Ruffray – Managing Director -
                                &nbsp; <a href='mailto:Arnaud.deruffray@jcdecaux.com'>
                                    Arnaud.deruffray@jcdecaux.com
                                </a>
                                <br />
                                Ms. Atiporn Lertskulsomboon – Finance & Accounting Director & Human Resource -
                                &nbsp; <a href='mailto:AtipornL@jcdecaux.com'>
                                    AtipornL@jcdecaux.com
                                </a>
                                <br />
                                Ms. Chantana Arschariyawinyoo – General Manager Airport, Sales & Marketing -
                                &nbsp; <a href='mailto:ChantanaA@jcdecaux.com'>
                                    ChantanaA@jcdecaux.com
                                </a>
                                <br />
                                Mr. Theera Sriboonwong – Operations Director -
                                &nbsp; <a href='mailto:TheeraS@jcdecaux.com'>
                                    TheeraS@jcdecaux.com
                                </a>
                                <br />
                                Ms. Panadda Deesiri – HR & Administration Manager –
                                &nbsp; <a href='mailto:PanaddaD@jcdecaux.com'>
                                    PanaddaD@jcdecaux.com
                                </a>
                            </p>
                        </div >
                    </div >

                    <div id="th" className="col-12 text-secondary mt-5 hident">
                        <div className='px-5 py-5 language-th'>
                            <p className='fs-5'>
                                เลขที่ 3 อาคารรัจนาการ ชั้น 21 ถนนสาทรใต้ แขวงยานนาวา เขตสาทร กรุงเทพฯ ประเทศไทย 10120
                                <br />โทร: (+662) 676 7655-64, แฟกซ์:(+662) 676 7667
                            </p>
                            <p className='mx-5'>
                                นายอาร์โนลด์ มารี มิเชล เดอ รุฟเฟรย์ – กรรมการผู้จัดการ -
                                &nbsp; <a href='mailto:Arnaud.deruffray@jcdecaux.com'>
                                    Arnaud.deruffray@jcdecaux.com
                                </a>
                                <br />
                                นางสาวอติพร เลิศสกุลสมบูรณ์ – ผู้อำนวยการฝ่ายการเงิน,บัญชี และบุคคล -
                                &nbsp; <a href='mailto:AtipornL@jcdecaux.com'>
                                    AtipornL@jcdecaux.com
                                </a>
                                <br />
                                นางสาวฉันทนา อัจฉริยวิญญู – ผู้จัดการทั่วไปฝ่ายสนามบิน การขาย และการตลาด -
                                &nbsp; <a href='mailto:ChantanaA@jcdecaux.com'>
                                    ChantanaA@jcdecaux.com
                                </a>
                                <br />
                                นายธีระ ศรีบุญวงศ์ – ผู้อำนวยการฝ่ายปฏิบัติการ -
                                &nbsp; <a href='mailto:TheeraS@jcdecaux.com'>
                                    TheeraS@jcdecaux.com
                                </a>
                                <br />
                                นางสาวปนัดดา ดีศิริ – ผู้จัดการฝ่ายบุคคลและธุรการ –
                                &nbsp; <a href='mailto:PanaddaD@jcdecaux.com'>
                                    PanaddaD@jcdecaux.com
                                </a>
                            </p>
                        </div>
                    </div >
                </div >
            </div>
        </>
    )
}

export default Contact