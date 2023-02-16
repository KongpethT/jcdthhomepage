import React, { useState, useEffect } from "react";

const Borad = () => {
    const index_img = 15
    let imgs = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"]
    const items_img = () => {
        for (let i = 1; i <= index_img; i++) {
            imgs[i] = { id: i }
        }
    }
    const [screen_y, _screen_y] = useState(window.innerHeight)
    window.addEventListener('resize', () => {
        _screen_y(window.innerHeight)
    })

    useEffect(() => {
        items_img()
    }, [])
    return (
        <>
            <div>
                <div style={{ height: screen_y - 200 }} className="show-items">
                    {imgs.map((id) => {
                        return (
                            <div className="items-img">
                                <img src={`./image/board/board-${id}.png`} alt="picture" />
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Borad