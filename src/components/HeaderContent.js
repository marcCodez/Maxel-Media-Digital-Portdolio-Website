import React from 'react'
import './HeaderContent.css'
import {Button} from 'react-bootstrap';
import '../App.css';

function HeaderContent() {
    return (
        <div className='header-container'>
            <video src="/videos/Showreel.mp4" autoPlay loop muted />
            <h1>MAX PASSION. MAX QUALITY.</h1>
           <div classNAme='hero-btns'>
                <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                    Let's Collab!
                </Button>
           </div>

        </div>
    )
}

export default HeaderContent
