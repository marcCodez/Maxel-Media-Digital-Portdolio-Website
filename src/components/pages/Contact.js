import React from 'react'
import '../../App.scss'

function Contact() {
    return (
        <section id='contact' class='text-center py-3'>
            <div className='container'>
                <h1 className='section-title'>CONTACT MAXEL MEDIA</h1>
                <div className='underline'></div>
                <p className='sub-text'>Submit an enquiry below or alternatively pm Maxel Media on Instagram or Facebook</p>
                    <form method="POST">
                        <div className='text-fields'>
                            <input type='text' className='text-input name-input' name='name' placeholder='Full Name'/>
                            <input type='email' className='text-input email-input' name='email' placeholder='Email'/>
                            <input type='text' className='text-input subject-input' name='subject' placeholder='Subject'/>
                            <input type='text' className='text-input phone-input' name='phone' placeholder='Phone Number'/>
                            <textarea type='text' className='text-input message-input' name='message' placeholder='Message'></textarea>
                    </div>
                    <button type="submit" className='btn-dark'>Submit</button>
                    </form>
            </div>
        </section>
    )
}

export default Contact
