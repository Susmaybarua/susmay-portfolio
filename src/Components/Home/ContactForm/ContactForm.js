import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.css'

const ContactForm = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ueun1xw', 'template_vppajh3', form.current, 'user_m0GTB70RZb9h4ACAhAjTY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
    return (
        <div>
           <h1>Please Contact with me</h1>
            {/* service_ueun1xw */}
            <div>
            <form className="contactForm" ref={form} onSubmit={sendEmail} >
            <input type="text" name="user_name" placeholder ="Enter Name" />
            <br/>
            <input type="email" name="user_email" placeholder ="Enter Email" />
            <br/>
            <textarea name="message" placeholder ="Enter Message"/>
            <br/>
            <input type="submit" value="Send" />
            </form>
            </div>
            
        </div>
    );
};

export default ContactForm;