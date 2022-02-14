import './css/notFound.css'
import { BiError } from "react-icons/bi";
const NotFound = () => {
    return (
        <section className="not-found">
            <div class="wrapper">
                <div class="typing-demo alert align-items-center">
                    ): 404 | page not found - <BiError className='bi-error' />
                    <br />
                </div>
            </div>
        </section >

    )
}

export default NotFound