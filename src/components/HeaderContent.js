import React from 'react'
import './HeaderContent.css'
import {Button} from 'react-bootstrap';
import '../App.scss';

function HeaderContent() {
    return (
        <div className='header-container'>
            <video src="/videos/Showreel-cut.mp4" autoPlay loop muted />
           <div classNAme='hero-btns'>
                <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                    Get Started!
                </Button>
           </div>

        </div>
    )
}

export default HeaderContent
