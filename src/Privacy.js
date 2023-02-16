import React, { useEffect, useState } from "react"


const Internal = () => {

    const index_img = 15
    let imgs = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"]
    const items_img = () => {
        for (let i = 1; i <= index_img; i++) {
            imgs[i] = { id: i }
        }
    }
    const [screen_y, _screen_y] = useState(window.innerHeight)
    window.addEventListener('resize', () => {
        _screen_y(window.innerHeight)
    })

    useEffect(() => {
        items_img()
    }, [])

    return (
        <>
            <div className="container mb-2">
                <nav className="navbar navbar-expand-lg navbar-light ">
                    <div className="container-fluid" >
                        <p className="text-secondary fs-6 mx-1 my-1">Private Policy for Internal Stakeholder</p>
                        <div className="collapse navbar-collapse col justify-content-end" id="navbarSupportedContent" >
                            <ul className="navbar-nav">
                                <li className="btn btn-primary btn-sm mx-1 my-1"> <a href="/pdpa-internal" className="text-light" style={{ textDecoration: 'none' }}>Private Policy for Internal Stakeholder</a> </li>
                                <li className="btn btn-primary btn-sm mx-1 my-1"><a href="/pdpa-external" className="text-light" style={{ textDecoration: 'none' }}>Privacy Policy for External Stakeholder</a></li>
                                <li className="btn btn-primary btn-sm mx-1 my-1"><a href="/pdpa-cctv" className="text-light" style={{ textDecoration: 'none' }}>CCTY Privacy Notice</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div>
                <div style={{ height: screen_y - 250 }} className="show-items">
                    {imgs.map((id) => {
                        return (
                            <div className="items-img">
                                <img src={`./image/PrivacyPolicyForInternalStakeholder/PrivacyPolicyForInternalStakeholder-${id}.png`} alt="picture" />
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

const External = () => {
    const index_img = 15
    let imgs = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"]
    const items_img = () => {
        for (let i = 1; i <= index_img; i++) {
            imgs[i] = { id: i }
        }
    }
    const [screen_y, _screen_y] = useState(window.innerHeight)
    window.addEventListener('resize', () => {
        _screen_y(window.innerHeight)
    })
    useEffect(() => {
        items_img()
    }, [])
    return (
        <>
            <div className="container mb-2">
                <nav className="navbar navbar-expand-lg navbar-light ">
                    <div className="container-fluid" >
                        <p className="text-secondary fs-6 mx-1 my-1">Privacy Policy for External Stakeholder</p>
                        <div className="collapse navbar-collapse col justify-content-end" id="navbarSupportedContent" >
                            <ul className="navbar-nav">
                                <li className="btn btn-primary btn-sm mx-1 my-1"> <a href="/pdpa-internal" className="text-light" style={{ textDecoration: 'none' }}>Private Policy for Internal Stakeholder</a> </li>
                                <li className="btn btn-primary btn-sm mx-1 my-1"><a href="/pdpa-external" className="text-light" style={{ textDecoration: 'none' }}>Privacy Policy for External Stakeholder</a></li>
                                <li className="btn btn-primary btn-sm mx-1 my-1"><a href="/pdpa-cctv" className="text-light" style={{ textDecoration: 'none' }}>CCTY Privacy Notice</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div>
                <div style={{ height: screen_y - 250 }} className="show-items">
                    {imgs.map((id) => {
                        return (
                            <div className="items-img">
                                <img src={`./image/PrivacyPolicyForExternalStakeholder/PrivacyPolicyForExternalStakeholder-${id}.png`} alt="picture" />
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

const CCTV = () => {
    const index_img = 15
    let imgs = ["1", "2", "3", "4", "5", "6", "7"]
    const items_img = () => {
        for (let i = 1; i <= index_img; i++) {
            imgs[i] = { id: i }
        }
    }
    const [screen_y, _screen_y] = useState(window.innerHeight)
    window.addEventListener('resize', () => {
        _screen_y(window.innerHeight)
    })
    useEffect(() => {
        items_img()
    }, [])
    return (
        <>
            <div className="container mb-2">
                <nav className="navbar navbar-expand-lg navbar-light ">
                    <div className="container-fluid" >
                        <p className="text-secondary fs-6 mx-1 my-1">CCTY Privacy Notice</p>
                        <div className="collapse navbar-collapse col justify-content-end" id="navbarSupportedContent" >
                            <ul className="navbar-nav">
                                <li className="btn btn-primary btn-sm mx-1 my-1"> <a href="/pdpa-internal" className="text-light" style={{ textDecoration: 'none' }}>Private Policy for Internal Stakeholder</a> </li>
                                <li className="btn btn-primary btn-sm mx-1 my-1"><a href="/pdpa-external" className="text-light" style={{ textDecoration: 'none' }}>Privacy Policy for External Stakeholder</a></li>
                                <li className="btn btn-primary btn-sm mx-1 my-1"><a href="/pdpa-cctv" className="text-light" style={{ textDecoration: 'none' }}>CCTY Privacy Notice</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

            <div>
                <div style={{ height: screen_y - 250 }} className="show-items">
                    {imgs.map((id) => {
                        return (
                            <div className="items-img">
                                <img src={`./image/CCTVPrivacyNotice/CCTVPrivacyNotice-${id}.png`} alt="picture" />
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
const privacy = {
    internal: Internal,
    external: External,
    cctv: CCTV
}
export { privacy }
