import React from 'react'
import '../../App.scss'

function About() {
    return (
        <section id='about' class='text-center py-3'>
            <div class='container about-info'>
            <h1>about</h1>
            <img src='/images/maxpic.jpg' className='about-image'></img>
            <p className='about-desc'>Max Lerion is a content creator based in Sydney, Australia. Under an alias of Maxel Media he has been creating content for over 2 years and has recently started to publish client work on social media less than a year ago. He has worked with numerous brands, businesses and artists in  marketing with his diverse skills in photography and videography. Currently in his final year in a bachelor of Media (Screen and Sound Production), he aims to build his brand as a freelancer into a production company to help cater to businesses around Sydney in digital marketing and to bring visions to reality.</p>
            </div>
        </section>
    )
}

export default About
