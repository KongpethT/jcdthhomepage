import React from "react";
import Footer from "./components/Footer";
import PDFReader from "./components/PDFReader"


const MediaOfferEn = () => {
    return (
        <div>
            <div className="boxes_view_pdf">
                <div className="row">
                    <div className="col-12">
                        <PDFReader data={{ text: '/files/media_offer_2022.pdf' }} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default MediaOfferEn