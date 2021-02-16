import React from 'react'
import '../../App.scss'

function Contact() {
    return (
        <section id='contact' class='text-center py-3'>
            <div className='container'>
                <h1>CONTACT MAXEL MEDIA</h1>
                    <form method="POST">
                        <div className='text-fields'>
                            <input type='text' className='name-input' name='name' placeholder='Full Name'/>
                            <input type='email' className='email-input' name='email' placeholder='Email'/>
                            <input type='text' className='subject-input' name='subject' placeholder='Subject'/>
                            <input type='text' className='phone-input' name='phone' placeholder='Phone Number'/>
                            <input type='text' className='message-input' name='message' placeholder='Message'/>
                    </div>
                    <button type="submit">Submit</button>
                    </form>
            </div>
        </section>
    )
}

export default Contact
