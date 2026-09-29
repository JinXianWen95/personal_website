import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = React.useState(false);
  const [messageSent, setMessageSent] = React.useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    if (isSending) return;

    setIsSending(true);
    emailjs.sendForm('service_x8xbzup', 'template_51o3ee5', form.current, 'KF7nzD-7T7l5QYEH2')
      .then((result) => {
        console.log(result.text);
        setMessageSent(true);
        setTimeout(() => {
          setMessageSent(false);
        }, 5000);
        form.current.reset();
      }, (error) => {
        console.log(error.text);
        // Could show error state here
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option hologram'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>jinxw@live.it</h5>
            <a href="mailto:jinxw@live.it" target={'_blank'} rel='noreferrer' className="contact__link">
              Send a message
            </a>
          </article>
          <article className='contact__option hologram'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+39 3884953659</h5>
            <a href="https://api.whatsapp.com/send?phone=+393884953659" target={'_blank'} rel='noreferrer' className="contact__link">
              Send a message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail} className='contact-form hologram'>
          <div className='form-group'>
            <input
              type="text"
              name='name'
              placeholder='Your Full Name'
              required
            />
          </div>
          <div className='form-group'>
            <input
              type="email"
              name='email'
              placeholder='Your Email'
              required
            />
          </div>
          <div className='form-group'>
            <textarea
              name="message"
              rows="7"
              placeholder='Your Message'
              required
            />
          </div>
          <button
            type='submit'
            className={`btn btn-primary contact-send-btn ${isSending ? 'sending' : ''}`}
            disabled={isSending}
          >
            {isSending ? (
              <>
                Sending
                <span className="sending-dots" aria-hidden="true"></span>
              </>
            ) : (
              <>
                Send Message
                <span className="contact-arrow" aria-hidden="true">→</span>
              </>
            )}
          </button>
        </form>

        {messageSent && (
          <div className='contact-success hologram'>
            <div className='contact-success-icon'>&#10003;</div>
            <p>Message sent successfully!</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Contact