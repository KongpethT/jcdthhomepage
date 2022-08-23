import React from "react"
import PDFReader from "./components/PDFReader"
import Footer from "./components/Footer";

const Pdpa = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString)
    const file = urlParams.get('name')
    let text = 'PrivacyPolicyForInternalStakeholder'

    switch (file) {
        case 'PrivacyPolicyForInternalStakeholder':
            text = '/files/PrivacyPolicyForInternalStakeholder.pdf'
            break;
        case 'PrivacyPolicyForExternalStakeholder':
            text = '/files/PrivacyPolicyForExternalStakeholder.pdf'
            break;
        case 'CCTVPrivacyNotice':
            text = '/files/CCTVPrivacyNotice.pdf'
            break;
        default:
            text = '/files/pdpa.pdf'
            break;
    }

    return (
        <div>
            <div className="boxes_view_pdf">
                <div className="row">
                    <div className="col-12">
                        {/*<PDFReader data={{ text: '/files/PrivacyPolicyForInternalStakeholder.pdf' }} />*/}
                        <PDFReader data={{ text }} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Pdpa