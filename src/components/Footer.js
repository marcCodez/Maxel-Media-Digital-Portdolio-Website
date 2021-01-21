import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
            <section className='socials'>
                <Link className='socials-link'>
                    <i className='fa fa-facebook-square'></i>
                    <i className='fa fa-instagram'></i>
                    <i className='fa fa-youtube-square'></i>
                </Link>
                <p>© Marc Pulumbarit 2021</p>
            </section>
        </div>
    )
}

export default Footer
