import { Button, Title } from 'components'
import React from 'react'
import './contact.css'
import { AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai'
import { RiMessengerLine } from 'react-icons/ri'
import emailjs from "emailjs-com"
import { useRef } from 'react';


const Contact = () => {

    const contact = [
        {
            icon: <AiOutlineMail />,
            title: 'Email',
            text: 'hello@sosamson.com',
            link: "mailto:hello@sosamson.com"
        },
        {
            icon: <AiOutlineWhatsApp />,
            title: 'WhatsApp',
            text: '+97 155 966 71 57',
            link: "https://wa.me/971559667157"
        },
        {
            icon: <RiMessengerLine />,
            title: 'Facebook',
            text: 'Samson Sanyaolu',
            link: "https://www.facebook.com/sosamsony"
        }
    ]

    const form = useRef();
    
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(
            "service_y2rwezk",
            "template_yg4wgq8",
            form.current,
            "GIoNwxIwiVuYsXave"
            )
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

    return (
        <section id='contact'>
            <Title title='Contact Me' text="Get in Touch" />
            <div className="contact-container">
                <div className="contact-box-container">
                    {contact.map((item, index) => (
                        <div className="contact-box" key={index}>
                            {item.icon}
                            <div className="contact-box-title">{item.title}</div>
                            <div className="contact-box-text">{item.text}</div>
                            <a className='contact-box-link' href={item.link} target="_blank" rel="noopener noreferrer"> Send a message </a>
                        </div>
                    ))}
                </div>
                <div className="contact-form">
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="form-group">
                            <input
                                type="text"
                                placeholder='Your Full Name'
                                name="name"
                                id='name'
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                placeholder='Your Email'
                                name="email"
                                id='email'
                                required
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                name="message"
                                id="message"
                                cols="30"
                                rows="10"
                                placeholder='Your Message'
                                required
                            >
                            </textarea>
                        </div>
                        <Button text='Send Message' input type="submit" value="Send" />
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact