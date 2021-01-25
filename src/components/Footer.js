import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
            <section className='socials'>
                <Link 
                    className='socials-link'
                    to='/'
                    target='_blank'
                    aria-label='Youtube'
                    >
                    <i className='fa fa-facebook-square'/>
                </Link>
                <Link
                    to='/'
                    target='_blank'
                    aria-label='Instagram'
                >
                 <i className='fa fa-instagram'/>
                 </Link>
                 <Link
                    to='/'
                    target='_blank'
                    aria-label='Youtube'
                >
                 <i className='fa fa-youtube'/>
                 </Link>
                <p>© Marc Pulumbarit 2021</p>
            </section>
        </div>
    )
}

export default Footer
