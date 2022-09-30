import axios from "axios";
import React, { useEffect, useState } from "react";

const CookieAlert = (props) => {
    const [is_cookie, set_cookie] = useState(null)

    const getData = async () => {
        await axios.get('https://geolocation-db.com/json/')
            .then((value) => {
                console.log(value.data)
                set_cookie(value.data)
            })
    }
    useEffect(() => {
        getData()
    }, [])

    //console.log('my cookie: ', is_cookie);
    let elements = document.cookie
        .split(';')
        .map(cookie => cookie.split('='))
        .reduce((accumulator, [key, value]) =>
            ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {})

    const accept_cookie = () => {
        const cookie_card = document.getElementById('cookie_message')
        cookie_card.classList.add('d-none')
        document.cookie = 'web_cookie = true'
        document.cookie = 'IP_Address = ' + is_cookie.IPv4
        document.cookie = 'country = ' + is_cookie.country_name
        document.cookie = 'city = ' + is_cookie.city
        document.cookie = 'postal = ' + is_cookie.postal
        document.cookie = 'state = ' + is_cookie.state
        document.cookie = 'latitude = ' + is_cookie.latitude
        document.cookie = 'longitude = ' + is_cookie.longitude
    }

    const not_accept_cookie = () => {
        const cookie_card = document.getElementById('cookie_message')
        cookie_card.classList.add('d-none')
    }
    if (elements.web_cookie === undefined) {
        return (
            <div className="row">
                <div id="cookie_message" className="col-md-4 col-sm-12 button-fixed">
                    <div className="p-3 pb-4 bg-custom text-white">
                        <div className="row">
                            <div className="col-10">
                                {/*<h2>Allow Cookies</h2>*/}
                            </div>
                            <div className="col-2 text-center">
                                <i className="fas fa-times"></i>
                            </div>
                        </div>
                        <p>เว็บไซต์นี้ใช้คุกกี้ในการเก็บข้อมูลการใช้งานเพื่อให้คุณได้รับประสบการณ์ที่ดี หากคุณกด "ยอมรับ"
                            เราถือว่าคุณยอมรับการใช้งานคุกกี้ แต่ถ้าคุณไม่ต้องการให้ใช้คุกกี้ในการเก็บข้อมูล กรุณาคลิก “รายละเอียดเพิ่มเติม”
                            นอกจากนี้ คุณสามารถพิจารณาข้อมูลเพิ่มเติมเกี่ยวกับการเก็บ ใช้ และเปิดเผยข้อมูลส่วนบุคคลของคุณได้ที่ <a href="/pdpa">“นโยบายการคุ้มครองข้อมูลส่วนบุคคล”</a>
                        </p>
                        <center>
                            <button type="button" className="btn btn-danger w-10" onClick={accept_cookie}>ยอมรับ</button>
                            <button type="button" className="btn btn-primary w-10 mx-4" onClick={not_accept_cookie}>ไม่ยอมรับ</button>
                        </center>
                        {/*<button type="button" class="btn btn-danger w-100">ยอมรับ Accept Cookies</button>*/}
                    </div>
                </div>
            </div>
        )
    } else {
        return null
    }
}

export default CookieAlert