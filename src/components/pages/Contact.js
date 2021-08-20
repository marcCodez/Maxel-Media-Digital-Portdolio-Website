import React from 'react'
import '../../App.scss'

function Contact() {
    return (
        <section id='contact' class='text-center pb-3 space-top'>
            <div className='container'>
                {/* Heading  */}
                <h1 className='section-title'>CONTACT MAXEL MEDIA</h1>
                <div className='underline'></div>

                {/* Sub text */}
                <p className='sub-text'>Alternatively PM on Instagram or Facebook</p>

                    {/* Contact Form */}
                    <form 
                    name='contact' 
                    method='post' 
                    data-netlify='true' 
                    onSubmit='submit'
                    action='/success'
                    data-netlify-honeypot='bot-field'
                    >
                        <input type='hidden' name='form-name' value='contact' />
                        <div hidden>
                            <input name="bot-field"/>
                        </div>
                        <div className='text-fields'>
                       
                             {/* Name input */}
                            <div className="name-input d-flex flex-column"> 
                            <label for="name" className="name-label align-self-start">Full Name*</label>
                            <input required type='text' className='text-input ' name='name' />
                            </div>
                            
                            {/* Email input */}
                            <div className="email-input d-flex flex-column">
                            <label for="email" className="align-self-start">Email*</label>
                            <input required type='email' className='text-input' name='email' />
                            </div>

                            {/* Subject Input */}
                            <div className="subject-input d-flex flex-column">
                            <label for="subject" className="align-self-start">Subject*</label>
                            <input required type='text' className='text-input' name='subject'/>
                            </div>

                            {/* Phone Input */}
                            <div className="phone-input d-flex flex-column">
                            <label for="phone" className="align-self-start">Phone Number (Optional)</label>
                            <input type='text' className='text-input' name='phone'/>
                            </div>

                            
                            <div className="phone-input d-flex flex-column message-input">
                            <label for="message" className="align-self-start">Message</label>
                            <textarea required type='text' className='text-input' rows="5"  name='message'></textarea>
                            </div>
                                 
                    </div>
                    <div data-netlify-recaptcha='true'></div>
                    <button type="submit" className='btn-dark'>Submit</button>
                    </form>
            </div>
        </section>
    )
}

export default Contact
