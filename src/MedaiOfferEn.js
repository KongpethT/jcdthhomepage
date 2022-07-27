import React, { useState } from "react";

const MediaOfferEn = () => {
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
                        <object
                            className="documents"
                            trusted="yes"
                            application="yes"
                            title="Assembly"
                            data="/document/MediaOffer2022Website/media_offer_2022.pdf?#view=FitH&toolbar=0"
                            width="100%"
                            height={is_height_screen - reduce_screen_size}>
                        </object>
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

export default MediaOfferEn