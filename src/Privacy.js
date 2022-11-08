import React from "react"


const Internal = () => {
    return (
        <>
            <div className="container mb-2">
                <nav className="navbar navbar-expand-lg navbar-light ">
                    <div className="container-fluid" >
                        <p className="text-secondary fs-6 mx-1 my-1">Private Policy for Internal Stakeholder</p>
                        <div className="collapse navbar-collapse col justify-content-end" id="navbarSupportedContent" >
                            <ul className="navbar-nav">
                                <li className="btn btn-primary btn-sm mx-1 my-1"> <a href="/pdpa" className="text-light" style={{ textDecoration: 'none' }}>Private Policy for Internal Stakeholder</a> </li>
                                <li className="btn btn-primary btn-sm mx-1 my-1"><a href="/pdpa external" className="text-light" style={{ textDecoration: 'none' }}>Privacy Policy for External Stakeholder</a></li>
                                <li className="btn btn-primary btn-sm mx-1 my-1"><a href="/pdpa cctv" className="text-light" style={{ textDecoration: 'none' }}>CCTY Privacy Notice</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="container" style={{ height: "67vh" }}>
                <iframe
                    src="https://jcdecaux.sharepoint.com/sites/Asia-ExternalShare/_layouts/15/embed.aspx?UniqueId=780e342f-f466-4db3-ba7f-0b295674b97d"
                    width="100%"
                    height="94%"
                    frameborder="0"
                    scrolling="no"
                    allowfullscreen
                    title="PrivacyPolicyForInternalStakeholder.pdf">
                </iframe>
            </div>
        </>
    )
}

const External = () => {
    return (
        <>
            <div className="container mb-2">
                <nav className="navbar navbar-expand-lg navbar-light ">
                    <div className="container-fluid" >
                        <p className="text-secondary fs-6 mx-1 my-1">Privacy Policy for External Stakeholder</p>
                        <div className="collapse navbar-collapse col justify-content-end" id="navbarSupportedContent" >
                            <ul className="navbar-nav">
                                <li className="btn btn-primary btn-sm mx-1 my-1"> <a href="/pdpa" className="text-light" style={{ textDecoration: 'none' }}>Private Policy for Internal Stakeholder</a> </li>
                                <li className="btn btn-primary btn-sm mx-1 my-1"><a href="/pdpa external" className="text-light" style={{ textDecoration: 'none' }}>Privacy Policy for External Stakeholder</a></li>
                                <li className="btn btn-primary btn-sm mx-1 my-1"><a href="/pdpa cctv" className="text-light" style={{ textDecoration: 'none' }}>CCTY Privacy Notice</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="container" style={{ height: "67vh" }}>
                <iframe
                    src="https://jcdecaux.sharepoint.com/sites/Asia-ExternalShare/_layouts/15/embed.aspx?UniqueId=df687959-2801-41eb-8621-cb90ddb81ff8"
                    width="100%"
                    height="94%"
                    frameborder="0"
                    scrolling="no"
                    allowfullscreen
                    title="PrivacyPolicyForExternalStakeholder.pdf">

                </iframe>
            </div>
        </>
    )
}

const CCTV = () => {
    return (
        <>
            <div className="container mb-2">
                <nav className="navbar navbar-expand-lg navbar-light ">
                    <div className="container-fluid" >
                        <p className="text-secondary fs-6 mx-1 my-1">CCTY Privacy Notice</p>
                        <div className="collapse navbar-collapse col justify-content-end" id="navbarSupportedContent" >
                            <ul className="navbar-nav">
                                <li className="btn btn-primary btn-sm mx-1 my-1"> <a href="/pdpa" className="text-light" style={{ textDecoration: 'none' }}>Private Policy for Internal Stakeholder</a> </li>
                                <li className="btn btn-primary btn-sm mx-1 my-1"><a href="/pdpa external" className="text-light" style={{ textDecoration: 'none' }}>Privacy Policy for External Stakeholder</a></li>
                                <li className="btn btn-primary btn-sm mx-1 my-1"><a href="/pdpa cctv" className="text-light" style={{ textDecoration: 'none' }}>CCTY Privacy Notice</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

            <div className="container" style={{ height: "67vh" }}>
                <iframe
                    src="https://jcdecaux.sharepoint.com/sites/Asia-ExternalShare/_layouts/15/embed.aspx?UniqueId=27e4ded9-b5cc-49a2-be15-8a6207a41231"
                    width="100%"
                    height="94%"
                    frameborder="0"
                    scrolling="no"
                    allowfullscreen
                    title="CCTVPrivacyNotice.pdf">
                </iframe>
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
