import React from 'react'

class ContactPage extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div className='full-page contact-normal'>
                I am currently looking for <span className='contact-special'>internships</span>, and would be <span className='contact-special'>delighted</span>
                to be contacted by a <span className='contact-special'>potential employers</span>.
                <div className='contact-specialOne'>Shoot me an email @</div>
                <div className='contact-email'>imtiazkhaled07@gmail.com</div>
            </div>
         );
    }
}
 
export default ContactPage;