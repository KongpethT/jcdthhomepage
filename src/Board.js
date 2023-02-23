import React from "react";
import { screen } from "./components/screen";


const Borad = () => {
    let imgs = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"]
   /* const [screen_y, _screen_y] = useState(window.innerHeight)
    window.addEventListener('resize', () => {
        _screen_y(window.innerHeight)
    })*/

    return (
        <>
            <div className="show">
                <div id="full_screen" className="show-items" onDoubleClick={screen.full} >
                    {imgs.map((id) => {
                        return (
                            <div key={id} className="items-img">
                                <img className="zoom" src={`./image/board/board-${id}.png`} alt="pictures" />
                            </div>
                        )
                    })}

                </div>
            </div>
        </>
    )
}

export default Borad