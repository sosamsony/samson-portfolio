import React from 'react'
import './about.css'
import { Button, Title } from 'components'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { AiOutlineProject } from 'react-icons/ai'

const About = () => {
    return (
        <section id='about'>
            <Title text="Get To Know" title="About Me" />
            <div className='about-content'>
                <div className='about-image'>
                    <img src={require('../../assets/me.png')} alt="Samson Sanyaolu" />
                </div>
                <div className='about-container'>

                    <div className="content-container">

                        <div className="content-box">
                            <FaAward />
                            <h3>Experience</h3>
                            <p>
                               5+ years of experience in web development.
                            </p>
                        </div>

                        <div className="content-box">
                            <FiUsers />
                            <h3>Clients</h3>
                            <p>
                                100+ clients.
                            </p>
                        </div>

                        <div className="content-box">
                            <AiOutlineProject />
                            <h3>Projects</h3>
                            <p>
                                200+ projects.
                            </p>
                        </div>

                    </div>

                    <p className='text'>
                    I have the right blend of design thinking and industry skills needed to build technological solutions based on digital design and development to solve problems. I am passionate about creating responsive user experiences and websites to help organizations sustain seamless web presence, solve problems, optimize processes and make better business decisions.
                    </p>

                    <p className='text'>
                    I also have undying passion for raising a community of youth interested in Artificial Intelligence, helping them to leverage technology and gain relevant skills for the future.
                    </p>

                    <a href="http://api.whatsapp.com/send?phone=+971559667157&text=Hello%20Samson%20Sanyaolu.&source=&data=" target="_blank" rel="noopener noreferrer"><Button text="Let's Talk" position="left" /></a>

                </div>
            </div>
        </section>
    )
}

export default About