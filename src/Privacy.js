import React from "react"
import { screen } from "./components/screen";

const Internal = () => {
    let imgs = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"]
    /* const [screen_y, _screen_y] = useState(window.innerHeight)
     window.addEventListener('resize', () => {
         _screen_y(window.innerHeight)
     })*/

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
            <div className="show">
                <div id="full_screen" className="show-auto" onDoubleClick={screen.full} onClick={screen.zoom}>
                    {imgs.map((id) => {
                        return (
                            <div key={id} className="items-img">
                                <img className="zoom" src={`./image/PrivacyPolicyForInternalStakeholder/PrivacyPolicyForInternalStakeholder-${id}.png`} alt="pictures" />
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

const External = () => {
    let imgs = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"]
    /* const [screen_y, _screen_y] = useState(window.innerHeight)
     window.addEventListener('resize', () => {
         _screen_y(window.innerHeight)
     })*/
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

            <div className="show">
                <div id="full_screen" className="show-auto" onDoubleClick={screen.full} onClick={screen.zoom}>
                    {imgs.map((id) => {
                        return (
                            <div key={id} className="items-img">
                                <img className="zoom" src={`./image/PrivacyPolicyForExternalStakeholder/PrivacyPolicyForExternalStakeholder-${id}.png`} alt="pictures" />
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

const CCTV = () => {
    let imgs = ["1", "2", "3", "4", "5", "6", "7"]
    /* const [screen_y, _screen_y] = useState(window.innerHeight)
     window.addEventListener('resize', () => {
         _screen_y(window.innerHeight)
     })*/
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

            <div className="show">
                <div id="full_screen" className="show-auto" onDoubleClick={screen.full} onClick={screen.zoom}>
                    {imgs.map((id) => {
                        return (
                            <div key={id} className="items-img">
                                <img className="zoom" src={`./image/CCTVPrivacyNotice/CCTVPrivacyNotice-${id}.png`} alt="pictures" />
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
