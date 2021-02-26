import React, { useRef} from 'react'
import { Link } from 'react-router-dom';
import '../App.scss';

function HeaderContent() {


const vidRef = useRef(null);
const playVideo = () => {
    vidRef.current.play()
}

const pauseVideo = () => {
    vidRef.current.pause()
}

    return (
        <div className='header-container space-top'>
            <video ref={vidRef} src="/videos/Showreel-cut-compressed.mp4" autoPlay loop muted controls/>
           <div className='hero-btns'>
               <Link
               to='/contact'
               >
                <button
                className='btn-light'
                >
                    Let's Collab!
                </button>
                </Link>
                <div className='vid-controls'>
                <a 
                    onClick={playVideo}
                    aria-label='Play-button'
                    >
                       <i class="fa fa-play-circle play-button"></i>
                </a>

                <a 
                    onClick={pauseVideo}
                    aria-label='Play-button'
                    >
                       <i class="fa fa-pause-circle pause-button"></i>
                </a>
                </div>
           </div>

        </div>
    )
}

export default HeaderContent
