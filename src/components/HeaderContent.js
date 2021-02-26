import React from 'react'
import { Link } from 'react-router-dom';
import '../App.scss';

function HeaderContent() {
    return (
        <div className='header-container space-top'>
            <video src="/videos/Showreel-cut-compressed.mp4" autoPlay loop muted />
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
           </div>

        </div>
    )
}

export default HeaderContent
