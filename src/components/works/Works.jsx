import { Title } from 'components'
import React from 'react'
import './works.css'

const Works = () => {
    const works = [
        {
            id: 1,
            title: 'Sosamson Links',
            github: 'https://github.com/sosamsony/samson-link',
            img: 'https://sosamson.com/static/portfolio7.jpeg',
            live: 'https://link.sosamson.com',
        },
        {
            id: 2,
            title: 'Food App',
            github: 'https://github.com/sosamsony/foodapp',
            img: 'https://sosamson.com/static/portfolio2.jpeg',
            live: 'https://foodapp.sosamson.com/',
        },
        {
            id: 3,
            title: 'Forbes Richest People',
            github: 'https://github.com/sosamsony/forbes-richest-men',
            img: 'https://sosamson.com/static/forbes.png',
            live: 'https://forbes-richest-men.vercel.app',
        },
        {
            id: 4,
            title: 'Davidic Music App',
            github: 'https://github.com/sosamsony/davidicapp',
            img: 'https://sosamson.com/static/portfolio1.jpeg',
            live: 'https://davidicapp.sosamson.com',
        },
        {
            id: 5,
            title: 'Invoice Generator',
            github: 'https://github.com/sosamsony/invoice-generator',
            img: 'https://sosamson.com/static/portfolio6.jpeg',
            live: 'https://sosarena-invoice.netlify.app/',
        },
        {
            id: 6,
            title: 'Restaurant Menu App',
            github: 'https://github.com/sosamsony/menu-app',
            img: 'https://sosamson.com/static/portfolio5.jpeg',
            live: 'https://menu-app-reactjs.netlify.app/',
        },
        {
            id: 7,
            title: 'Doctor Portal',
            github: 'https://github.com/sosamsony/doctor-portal',
            img: 'https://sosamson.com/static/doctor.png',
            live: 'https://doctori.netlify.app/',
        },
        {
            id: 8,
            title: 'Travel Companion',
            github: 'https://github.com/sosamsony/Travel-Companion',
            img: 'https://raw.githubusercontent.com/sosamsony/Travel-Companion/master/images/home.png',
            live: 'https://travel-companion-web.netlify.app/',
        },
        {
            id: 9,
            title: 'Word Dictionary',
            github: 'https://github.com/sosamsony/word-dictionary',
            img: 'https://sosamson.com/static/word.png',
            live: 'https://word-dictionary.netlify.app/',
        },
        {
            id: 10,
            title: 'UI Design | Crisis Mgt',
            github: 'https://github.com/sosamsony',
            img: 'https://sosamson.com/static/crisismgt.png',
            live: 'https://xd.adobe.com/view/c1588e90-d618-4c4d-ae37-aca8f7fbcdbf-940b/',
        },
        {
            id: 11,
            title: 'UI Design | Kidsitter App',
            github: 'https://github.com/sosamsony',
            img: 'https://sosamson.com/static/kidsitter.png',
            live: 'https://www.figma.com/proto/YuXjYDsC7aRE2eLydmtupd/Kidsitter?page-id=0%3A1&node-id=2%3A32&viewport=241%2C48%2C0.15&scaling=scale-down&starting-point-node-id=2%3A32',
        },
        {
            id: 12,
            title: 'QR Anything Project',
            github: 'https://github.com/sosamsony/QRAnything',
            img: 'https://sosamson.com/static/qrmock.png',
            live: 'https://qr.sosamson.com/',
        },
        {
            id: 13,
            title: 'Short Url Project',
            github: 'https://github.com/sosamsony/shorturl',
            img: 'https://sosamson.com/static/shortqrl.png',
            live: 'https://shorturl.sosamson.com/',
        },
        {
            id: 14,
            title: 'Marketech Agency',
            github: 'https://github.com/sosamsony',
            img: 'https://sosamson.com/static/marketech.png',
            live: 'https://marketech.ae',
        },
        {
            id: 15,
            title: 'Abu Dhabi Projects',
            github: 'https://github.com/sosamsony',
            img: 'https://sosamson.com/static/fcpweb.png',
            live: 'https://fcpwebs.com/',
        },
        {
            id: 16,
            title: 'UI Design | Paybus',
            github: 'https://github.com/sosamsony',
            img: 'https://sosamson.com/static/paybus.png',
            live: 'https://xd.adobe.com/view/c1588e90-d618-4c4d-ae37-aca8f7fbcdbf-940b/',
        },
        {
            id: 17,
            title: 'AspireHub Canada',
            github: 'https://github.com/sosamsony',
            img: 'https://sosamson.com/static/aspirehub.png',
            live: 'https://aspirehub.org',
        },
        {
            id: 18,
            title: 'Gomba & Patience Oyor Foundation',
            github: 'https://github.com/sosamsony',
            img: 'https://sosamson.com/static/gopat.png',
            live: 'https://gopat.org/',
        },
        {
            id: 19,
            title: 'LBS Personal Shopper',
            github: 'https://github.com/sosamsony',
            img: 'https://sosamson.com/static/lbs.png',
            live: 'https://lbspersonalshopper.com/',
        },
        {
            id: 20,
            title: 'REDE Website',
            github: 'https://github.com/sosamsony',
            img: 'https://sosamson.com/static/redenn.png',
            live: 'https://werede.net/',
        },
        {
            id: 21,
            title: 'Bible App Project',
            github: 'https://github.com/sosamsony',
            img: 'https://sosamson.com/static/biblemock.png',
            live: 'https://bible.finestwine.org/',
        },
        ,
         {
            id: 22,
            title: 'Seun Richards Brand',
            github: 'https://github.com/sosamsony',
            img: 'https://sosamson.com/static/seunrichards.png',
            live: 'https://seunrichards.com',
        },
        {
            id: 23,
            title: 'High Vision Properties',
            github: 'https://github.com/sosamsony',
            img: 'https://sosamson.com/static/hvprop.png',
            live: 'https://hvprops.com',
        },
        {
            id: 24,
            title: 'Country App',
            github: 'https://github.com/sosamsony/CountryApp',
            img: 'https://sosamson.com/static/countryapp.png',
            live: 'https://sosamson-country-app.vercel.app/',
        } 

    ]
    return (
        <section id='portfolio'>
            <Title title='Portfolio' text="My Recent Work" />
            <div className='works-container'>
                {
                    works.map(work => {
                        return (
                            <div className='work-item' key={work.id}>
                                <div className='work-img'>
                                    <img src={work.img} alt={work.title} />
                                </div>
                                <div className='work-info'>
                                    <h3>{work.title}</h3>
                                    <p>
                                        <a
                                            href={work.github}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='btn btn-sm '
                                        >
                                            Github
                                        </a>
                                        <a
                                            href={work.live}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='btn btn-sm btn-primary'
                                        >
                                            Live
                                        </a>
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Works
