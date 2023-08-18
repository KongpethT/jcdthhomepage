import React from "react";
import { screen } from "./components/screen";



const Media_offer_en = () => {
    let imgs = []
    for (let i = 1; i <= 92; i++) {
        imgs.push(i)
    }

    /*const [screen_y, _screen_y] = useState(window.innerHeight)
    window.addEventListener('resize', () => {
        _screen_y(window.innerHeight)
    })*/

    return (
        <>
            <div className="show">
                <div id="full_screen" className="show-items" onDoubleClick={screen.full}>
                    {imgs.map((id, index) => {
                        return (

                            <div key={index} className="items-img">
                                <img className="zoom" src={`./image/mediaoffer/mediaoffer-${id}.png`} alt="pictures" />
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
    /*
        const [screen_y, _screen_y] = useState(window.innerHeight)
        window.addEventListener('resize', () => {
            _screen_y(window.innerHeight)
        })
    */
    return (
        <>
            <div className="show">
                <div id="full_screen" className="show-items" onDoubleClick={screen.full}>
                    {imgs.map((id, index) => {
                        return (
                            <div key={index} className="items-img">
                                <img className="zoom" src={`./image/mediaoffer/mediaoffer-${id}.png`} alt="pictures" />
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