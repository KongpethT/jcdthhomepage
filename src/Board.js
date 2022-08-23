import React from "react";
import Footer from "./components/Footer";
import PDFReader from "./components/PDFReader"

const Borad = () => {
    return (
        <div>
            <div className='boxes_view_pdf'>
                <div className="row">
                    <div className="col-12">
                        <PDFReader data={{ text: '/files/board.pdf' }} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Borad