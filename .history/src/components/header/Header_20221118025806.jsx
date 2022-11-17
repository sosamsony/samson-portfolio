import React from 'react'
import './header.css'
import { BsLinkedin, BsGithub, BsFileText } from 'react-icons/bs'
import { HiChevronDoubleDown } from 'react-icons/hi'
import { Button } from 'components'
import { ButtonOutline } from 'components/shared/Button'
import ME from 'assets/me.png'

const Header = () => {
    return (
        <header className='header' id='home'>
            <div className='header-header'>
                <div className="header-title">
                    <h5>Hello I'm</h5>
                    <h1>Samson Sanyaolu</h1>
                    <small>Front-End Developer & UI/UX Designer</small>
                </div>
                <div className="header-buttons">
                <a href="https://sosamson.com/resume" target="_blank" rel="noopener noreferrer"><ButtonOutline text="Download CV" /></a>
                <a href="http://api.whatsapp.com/send?phone=+971559667157&text=Hello%20Samson%20Sanyaolu.&source=&data=" target="_blank" rel="noopener noreferrer"><Button text="Let's Talk" /></a>
                </div>
            </div>
            <div className='header-footer'>
                <div className="header-socials">

                    <a href="https://www.linkedin.com/in/sosamsony" target="_blank" rel="noopener noreferrer">
                        <BsLinkedin />
                    </a>

                    <a href="https://github.com/sosamsony" target="_blank" rel="noopener noreferrer">
                        <BsGithub />
                    </a>

                    <a href="https://sosamson.com/resume" target="_blank" rel="noopener noreferrer">
                        <BsFileText />
                    </a>

                </div>
                <div className="image-area">
                    <img src={ME} alt="Samson Sanyaolu" />
                </div>
                <a href='#about' className='scroll-down'>
                    <span>Scroll Down</span>
                    <HiChevronDoubleDown />
                </a>
            </div>
        </header>
    )
}

export default Header