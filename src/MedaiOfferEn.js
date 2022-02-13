import './css/board.css'
const MediaOfferEn = () => {
    let myImg = []
    const num = 93;
    const pageStart = 0
    const pageEnd = (num - 2)
    const pageOver = (num - 1)

    for (let i = 0; i < num; i++) {
        myImg[i] = `/MediaOffer2022Website/Slide${i + 1}.JPG`
    }
    return (
        <section style={{ margin: '0 auto' }}>
            <div className="slider">
                <ul>
                    {myImg.map((row, index) => {
                        return (
                            <li key={index} id={`no-js-slider-${index}`} className="slide">
                                <img src={row} alt='image' />
                                <a className="prev" href={(index === pageStart) ? `#no-js-slider-${pageEnd}` : `#no-js-slider-${parseInt(index - 1)}`}>prev</a>
                                <a className="next" href={(index === pageEnd | index === pageOver) ? `#no-js-slider-0` : `#no-js-slider-${parseInt(index + 1)}`}>next</a>
                            </li>
                        )
                    })}
                </ul>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>
        </section >
    )
}

export default MediaOfferEn