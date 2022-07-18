import React from 'react'
import './testimonials.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Title } from 'components';

const Testimonials = () => {
    const testimonials = [
        {
            name: 'Wunmi Akinlosotu',
            job: 'C.E.O',
            company: 'The Blooming Hub, Canada',
            img: 'https://media-exp1.licdn.com/dms/image/C4D03AQGc2B65gGchQA/profile-displayphoto-shrink_200_200/0/1517572187363?e=2147483647&v=beta&t=ojpRVSBCrL7IJh_XjvLvF1BLmEsXlueU9qgJlBQxsiA',
            comment: "Samson is a very creative, innovative and diligent tech expert with great ability to create user-friendly designs and development. He is willing to go the extra mile to deliver more than he promised and on time!"
        },
        {
            name: 'Sahar Ali Elamin',
            job: 'General Manager',
            company: 'Twofour54 Partner',
            img: 'https://media-exp2.licdn.com/dms/image/C4E03AQGVN5dCQjT5bQ/profile-displayphoto-shrink_800_800/0/1516984230840?e=1661385600&v=beta&t=pWuLvUp4b0xo9KEygVjG4eE_Dz7vf0I4dR7wjt7MB_o',
            comment: "Based on my experience with Samson, I can say with confidence that he is one of the most naturally talented and hardworking Web Developer with whom I have had the opportunity to work with!"
        },
        {
            name: 'Angel Macdestiny',
            job: 'Founder',
            company: 'Women Above Rubies',
            img: 'https://womenaboverubies.org/wp-content/uploads/2021/02/WhatsApp-Image-2021-01-29-at-1.55.08-AM.jpeg',
            comment: "I am always impressed by the level of service we get from Samson, no matter how big or small our project may be. He always comes up with brilliant ideas and solutions at all time and always right on time."
        },
        {
            name: 'Frank Teboh',
            job: 'C.E.O',
            company: 'Fraddy Consultancy',
            img: 'https://pbs.twimg.com/profile_images/1467720956558913536/9b2PovIz_400x400.jpg',
            comment: "I enjoy working with Samson and learn so much from him. He makes achieving corporate goals to be so easy. I am always glad to have him in the network of our productive and creative team. Kudos Samson!"
        },
        {
            name: 'Sam Oriola',
            job: 'C.E.O',
            company: 'Kingdom Lifestyle Assembly',
            img: 'https://media-exp1.licdn.com/dms/image/C5103AQFdFerhMImwaw/profile-displayphoto-shrink_200_200/0/1579229965707?e=2147483647&v=beta&t=AAHkzaTrLNjHAflWyMvhnHnry8kKTepQhkbUGXXrSII',
            comment: "In the past years and till now, My brother, Mr. Samson and I have worked on several projects and in all, he has excelled.  He is exceptionally well prepared to start and complete any project successfully."
        }
    ]
    return (
        <section id='testimonials'>
            <Title title="Testimonials" text="Review from clients" />
            <div className='testimonial-container'>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    loop
                    autoplay={{ delay: 1000 }}
                    fadeEffect={{ crossFade: true }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10
                        },
                        480: {
                            slidesPerView: 1,
                            spaceBetween: 10
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30
                        }
                    }}
                >
                    {
                        testimonials.map((testimonial, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div className='testimonial-item'>
                                        <div className='testimonial-img'>
                                            <img src={testimonial.img} alt={testimonial.name} />
                                        </div>
                                        <div className='testimonial-info'>
                                            <h3>{testimonial.name}</h3>
                                            <p>{testimonial.comment}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </section >
    )
}

export default Testimonials