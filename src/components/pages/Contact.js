import React from 'react'
import '../../App.scss'

function Contact() {
    return (
        <section id='contact' class='text-center pb-3 space-top'>
            <div className='container'>
                <h1 className='section-title'>CONTACT MAXEL MEDIA</h1>
                <div className='underline'></div>
                <p className='sub-text'>Alternatively PM on Instagram or Facebook</p>
                    <form name='contact' method='POST' data-netlify-recaptcha='true' data-netlify='true' >
                        <input type='hidden' name='form-name' value='contact' />
                        <div className='text-fields'>
                            <input required type='text' className='text-input name-input' name='name' placeholder='Full Name'/>
                            <input required type='email' className='text-input email-input' name='email' placeholder='Email'/>
                            <input required type='text' className='text-input subject-input' name='subject' placeholder='Subject'/>
                            <input type='text' className='text-input phone-input' name='phone' placeholder='Phone Number (Optional)'/>
                            <textarea required type='text' className='text-input message-input' name='message' placeholder='Message'></textarea>
                           
                    </div>
                    <div data-netlify-recaptcha='true'></div>
                    <button type="submit" className='btn-dark'>Submit</button>
                    </form>
            </div>
        </section>
    )
}

export default Contact
