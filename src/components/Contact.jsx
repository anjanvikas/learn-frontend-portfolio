import React from 'react';
import { CONTACT } from '../constants/data';
import { FaLinkedin, FaGithub} from 'react-icons/fa';
const Contact = () =>{

    return (
        <section id="contact" className='contact'>
            <h1 className='get-in-toch'>Get In Touch</h1>
            <p className='address'>{CONTACT.address}</p>
            <p className='phone-number'>{CONTACT.phoneNo}</p>
            <p className='email'>{CONTACT.email}</p>
            <div className='social-media-url'>
                <a className="contact-linkedin" 
                    href={CONTACT.linkedin}
                    target="_blank" 
                    rel="noopener noreferrer"><FaLinkedin/></a>
                <a className="contact-github" 
                    href={CONTACT.github}
                    target="_blank" 
                    rel="noopener noreferrer"><FaGithub/></a>
            </div>
        </section>
    );
};

export default Contact;