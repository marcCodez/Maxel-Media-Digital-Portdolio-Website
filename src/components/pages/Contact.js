import React from 'react'
import '../../App.scss'

function Contact() {
    return (
        <div>
            <h1>contact</h1>
            <form>
               <input type='text' name='name' placeholder='Full Name'/>
               <input type='email' name='email' placeholder='Email'/>
               <input type='text' name='subject' placeholder='Subject'/>
               <input type='text' name='message' placeholder='Message'/>
            </form>
        </div>
    )
}

export default Contact
