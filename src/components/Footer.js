import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
    return (
        <footer className='footer-container'>
            <div className='test'>
            <section className='socials'>
            <div className='icon-socials'>
                <Link 
                    className='socials-link'
                    to='/'
                    target='_blank'
                    aria-label='Youtube'
                    >
                    <i className='fa fa-facebook-square'/>
                </Link>
                <Link
                    className='socials-link'
                    to='/'
                    target='_blank'
                    aria-label='Instagram'
                >
                 <i className='fa fa-instagram'/>
                 </Link>
                 <Link
                    className='socials-link'
                    to='/'
                    target='_blank'
                    aria-label='Youtube'
                >
                 <i className='fa fa-youtube'/>
                 </Link>
           
                 </div>
                 </section>
                 </div>
                 <p className="copyright">© Marc Pulumbarit 2021</p>
        </footer>
    )
}

export default Footer
