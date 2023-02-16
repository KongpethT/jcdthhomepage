import React, { useState, useEffect } from "react";



const Media_offer_en = () => {
    let imgs = []
    for (let i = 1; i <= 92; i++) {
        imgs.push(i)
    }

    const [screen_y, _screen_y] = useState(window.innerHeight)
    window.addEventListener('resize', () => {
        _screen_y(window.innerHeight)
    })

    return (
        <>
            <div>
                <div style={{ height: screen_y - 200 }} className="show-items">
                    {imgs.map((id, index) => {
                        return (
                            <div key={index} className="items-img">
                                <img src={`./image/mediaoffer/mediaoffer-${id}.png`} alt="picture" />
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

const Media_offer_th = () => {
    let imgs = []
    for (let i = 1; i <= 92; i++) {
        imgs.push(i)
    }

    const [screen_y, _screen_y] = useState(window.innerHeight)
    window.addEventListener('resize', () => {
        _screen_y(window.innerHeight)
    })

    return (
        <>
            <div>
                <div style={{ height: screen_y - 200 }} className="show-items">
                    {imgs.map((id, index) => {
                        return (
                            <div key={index} className="items-img">
                                <img src={`./image/mediaoffer/mediaoffer-${id}.png`} alt="picture" />
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

const media = {
    eng: Media_offer_en,
    th: Media_offer_th
}
export { media }