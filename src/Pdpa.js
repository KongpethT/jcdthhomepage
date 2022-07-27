import React, { useState } from "react"
import PDFReader from "./components/PDFReader"

const Pdpa = () => {
    const reduce_screen_size = 180
    const [is_height_screen, set_height_screen] = useState(window.innerHeight)

    window.addEventListener('resize', () => {
        set_height_screen(window.innerHeight)
    })
    return (
        <div>
            <div className='boxes'
                style={{ height: (is_height_screen - reduce_screen_size), overflowY: "auto" }}>
                <div className="row">
                    <div className="col-12">
                        <PDFReader data={{ text: '/files/pdpa0001.pdf' }} />
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

export default Pdpa