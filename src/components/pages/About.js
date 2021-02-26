import React from 'react'
import '../../App.scss'

function About() {
    return (
        <section id='about' className='text-center pb-3 space-top'>
            <div className='container'>
                <div className='about-info'>
                <div className='heading'>
            <h1 className='section-title'>ABOUT MAXEL MEDIA</h1>
            <div className='underline'></div>
            </div>
            <img src='/images/maxpic.jpg' className='about-image'/>
            <p className='about-description'>Max Lerion is a content creator based in Sydney, Australia. Under an alias of Maxel Media he has been creating content for over 2 years and has recently started to publish client work on social media less than a year ago. He has worked with numerous brands, businesses and artists in  marketing with his diverse skills in photography and videography. Currently in his final year in a bachelor of Media (Screen and Sound Production), he aims to build his brand as a freelancer into a production company to help cater to businesses around Sydney in digital marketing and to bring visions to reality.</p>
            </div>
            </div>
        </section>
    )
}

export default About
