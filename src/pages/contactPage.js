import React from 'react'
import { Divider } from 'antd'

class ContactPage extends React.Component {
    state = {}
    render() {
        return (
            <div className='full-page contact-normal'>
                <Divider className='divider'><span className='divider-text'> 3. How to contact me?  </span></Divider>
                <span className='contact-text'>
                    I am currently looking for <span className='contact-special'>internships</span>, and would be <span className='contact-special'>delighted</span> to be contacted by a <span className='contact-special'>potential employers</span>, or even someone who wants to have a small chat.
                    <div className='contact-specialOne'>Shoot me an email @</div>
                    <div><a className='contact-email' href='mailto:imtiazkhaled07@gmail.com'> imtiazkhaled07@gmail.com </a></div>
                </span>
            </div>
        );
    }
}

export default ContactPage;