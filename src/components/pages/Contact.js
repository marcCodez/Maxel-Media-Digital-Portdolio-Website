import React from 'react'
import '../../App.scss'

function Contact() {
    return (
        <section id='contact' class='text-center py-3'>
            <div className='container'>
                <h1 className='section-title'>CONTACT MAXEL MEDIA</h1>
                <div className='underline'></div>
                <p className='sub-text'>Alternatively PM on Instagram or Facebook</p>
                    <form action="POST" data-netlify="true">
                        <div className='text-fields'>
                            <input type='text' className='text-input name-input' name='name' placeholder='Full Name'/>
                            <input type='email' className='text-input email-input' name='email' placeholder='Email'/>
                            <input type='text' className='text-input subject-input' name='subject' placeholder='Subject'/>
                            <input type='text' className='text-input phone-input' name='phone' placeholder='Phone Number'/>
                            <textarea type='text' className='text-input message-input' name='message' placeholder='Message'></textarea>
                            <div data-netlify-recaptcha='true'></div>
                    </div>
                    <button type="submit" className='btn-dark'>Submit</button>
                    </form>
            </div>
        </section>
    )
}

export default Contact
