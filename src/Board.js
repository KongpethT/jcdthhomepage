import React from "react";
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
            <div className='row'>
                <div className="col-12">
                    <div className='mt-4 '>
                        <p>JCDecaux (Thailand) copyright© 2022</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Borad