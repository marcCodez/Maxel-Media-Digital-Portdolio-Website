import React from 'react'
import { Link } from 'react-router-dom';
import './HeaderContent.css'
import '../App.scss';

function HeaderContent() {
    return (
        <div className='header-container'>
            <video src="/videos/Showreel-cut.mp4" autoPlay loop muted />
           <div classNAme='hero-btns'>
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
