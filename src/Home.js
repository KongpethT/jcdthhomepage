import page1 from './medias/image/page_link1.png'
import page2 from './medias/image/page_link2.png'
import page3 from './medias/image/page_link3.png'
import page4 from './medias/image/page_link4.png'
import video from './medias/video/JCD_24MB.mp4'
import './css/home.css'
import { Link } from 'react-router-dom'
const Home = (props) => {
    const { page } = props
    return (
        <section className='home'>
            <article className="row">
                <div className="col-3 item-1">
                    <div className="row ">
                        <div className='my-1 mx-1 col justify-content-end'><Link to='/board'><img src={page1} alt="img" /></Link></div>
                        <div className='my-1 mx-1 col justify-content-end'><a target="_blank" rel="noreferrer noopener" href='https://www.jcdecaux.com/our-presence'><img src={page2} alt="img" /></a></div>
                    </div>
                </div>
                <div className="col-6 item-2">
                    <div className='col justify-content-center'>
                        <video width="100%" controls data-autoplay preload="true" loop muted={true} autoPlay >
                            <source src={video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
                <div className="col-3 item-3">
                    <div className="row">
                        <div className='my-1 mx-1 col justify-content-start'><a target="_blank" rel="noreferrer noopener" href='https://www.jcdecaux.com/'><img src={page3} alt="img" /></a></div>
                        <div className='my-1 mx-1  col justify-content-start'><a target="_blank" rel="noreferrer noopener" href='https://www.jcdecaux.com/about-us#aboutjcdecaux'><img src={page4} alt="img" /></a></div>
                    </div>
                </div>
            </article>
        </section >
    )
}

export default Home