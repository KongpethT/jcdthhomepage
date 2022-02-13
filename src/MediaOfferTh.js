import './css/board.css'
const MediaOfferTh = () => {
    let myImg = []
    const num = 93;
    const pageStart = 0
    const pageEnd = (num - 2)
    const pageOver = (num - 1)

    for (let i = 0; i < num; i++) {
        myImg[i] = `/MediaOffer2022Website/Slide${i + 1}.JPG`
    }
    return (
        <section className='board'>
            <div className="slider">
                    {myImg.map((row, index) => {
                        return (
                            <div key={index} id={`no-js-slider-${index}`} className="slide">
                                <img src={row} alt='image' />
                                <a className="prev" href={(index === pageStart) ? `#no-js-slider-${pageEnd}` : `#no-js-slider-${parseInt(index - 1)}`}>prev</a>
                                <a className="next" href={(index === pageEnd | index === pageOver) ? `#no-js-slider-0` : `#no-js-slider-${parseInt(index + 1)}`}>next</a>
                            </div>
                        )
                    })}
            </div>
        </section >
    )
}

export default MediaOfferTh