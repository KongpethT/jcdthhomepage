import './css/contact.css'
import { FaPhone, FaFax } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
const Contact = () => {
    const changeLanguage = (id) => {
        const th = document.getElementById('th')
        const en = document.getElementById('en')
        if (id === 'th') {
            th.classList.remove('hiden')
            en.classList.add('hiden')
        }
        if (id === 'en') {
            en.classList.remove('hiden')
            th.classList.add('hiden')
        }
    }
    return (
        <section>
            <div className="alert alert-secondary active" role="alert">
                <p id="p1">ติดต่อ – Contacts</p>
                <p>JCDecaux Thailand ติดต่อ – Contacts <span onClick={() => { changeLanguage('th') }}>TH</span> / <span onClick={() => { changeLanguage('en') }}>EN</span></p>
            </div>

            <div id="th" className="card text-secondary hiden">
                <article className='card-body'>
                    <p className='card-text'>เลขที่ 3 อาคารรัจนาการ ชั้น 21 ถนนสาทรใต้ แขวงยานนาวา เขตสาทร กรุงเทพฯ ประเทศไทย 10120</p>
                    <p className='card-text'> <FaPhone className='text-dark' /> โทร (+662) 676 7655-64</p>
                    <p className='card-text'> <FaFax className='text-dark' /> แฟกซ์ (+662) 676 7667</p>
                    <p className='card-text'>
                        นายอาร์โนลด์ มารี มิเชล เดอ รุฟเฟรย์ – กรรมการผู้จัดการ -
                        <a href='mailto:Arnaud.deruffray@jcdecaux.com' className=''>
                            <HiMail className='text-dark' /> Arnaud.deruffray@jcdecaux.com
                        </a>
                    </p>
                    <p className='card-text'>
                        นางสาวอติพร เลิศสกุลสมบูรณ์ – ผู้อำนวยการฝ่ายการเงิน,บัญชี และบุคคล -
                        <a href='mailto:AtipornL@jcdecaux.com' className=''>
                            <HiMail className='text-dark' /> AtipornL@jcdecaux.com
                        </a>
                    </p>
                    <p className='card-text'>
                        นางสาวฉันทนา อัจฉริยวิญญู – ผู้จัดการทั่วไปฝ่ายสนามบิน การขาย และการตลาด -
                        <a href='mailto:ChantanaA@jcdecaux.com' className=''>
                            <HiMail className='text-dark' /> ChantanaA@jcdecaux.com
                        </a>
                    </p>
                    <p className='card-text'>
                        นายธีระ ศรีบุญวงศ์ – ผู้อำนวยการฝ่ายปฏิบัติการ -
                        <a href='mailto:TheeraS@jcdecaux.com' className=''>
                            <HiMail className='text-dark' /> TheeraS@jcdecaux.com
                        </a>
                    </p>
                    <p className='card-text'>
                        นางสาวปนัดดา ดีศิริ – ผู้จัดการฝ่ายบุคคลและธุรการ –
                        <a href='mailto:PanaddaD@jcdecaux.com' className=''>
                            <HiMail className='text-dark' /> PanaddaD@jcdecaux.com
                        </a>
                    </p>
                </article>
            </div >
            <div id="en" className="card text-secondary">
                <article className='card-body'>
                    <p className='card-text'>3 Rajanakarn Building, 21st Floor, South Sathorn Road, Yannawa, Sathorn, Bangkok, Thailand 10120</p>
                    <p className='card-text'> <FaPhone className='text-dark' /> Tel: (+662) 676 7655-64</p>
                    <p className='card-text'> <FaFax className='text-dark' /> Fax:(+662) 676 7667</p>
                    <p className='card-text'>
                        Mr. Arnaud Marie, Michel de Ruffray – Managing Director -
                        <a href='mailto:Arnaud.deruffray@jcdecaux.com' className=''>
                            <HiMail className='text-dark' /> Arnaud.deruffray@jcdecaux.com
                        </a>
                    </p>
                    <p className='card-text'>
                        Ms. Atiporn Lertskulsomboon – Finance & Accounting Director & Human Resource -
                        <a href='mailto:AtipornL@jcdecaux.com' className=''>
                            <HiMail className='text-dark' /> AtipornL@jcdecaux.com
                        </a>
                    </p>
                    <p className='card-text'>
                        Ms. Chantana Arschariyawinyoo – General Manager Airport, Sales & Marketing -
                        <a href='mailto:ChantanaA@jcdecaux.com' className=''>
                            <HiMail className='text-dark' /> ChantanaA@jcdecaux.com
                        </a>
                    </p>
                    <p className='card-text'>
                        Mr. Theera Sriboonwong – Operations Director -
                        <a href='mailto:TheeraS@jcdecaux.com' className=''>
                            <HiMail className='text-dark' /> TheeraS@jcdecaux.com
                        </a>
                    </p>
                    <p className='card-text'>
                        Ms. Panadda Deesiri – HR & Administration Manager –
                        <a href='mailto:PanaddaD@jcdecaux.com' className=''>
                            <HiMail className='text-dark' /> PanaddaD@jcdecaux.com
                        </a>
                    </p>
                </article>
            </div >
        </section >
    )
}

export default Contact