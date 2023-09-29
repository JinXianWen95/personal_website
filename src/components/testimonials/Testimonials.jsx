import React from 'react'
import './testimonials.css'
import AVATAR from '../../assets/avatar.png'

// import Swiper core and required modules
import { Pagination, Navigation} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVATAR,
    name: 'Name1',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, in ea doloribus nam assumenda adipisci aspernatur est dolorum vero neque maxime unde quam non excepturi aliquid quia earum quisquam sunt.'
  },

  {
    avatar: AVATAR,
    name: 'Name2',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, in ea doloribus nam assumenda adipisci aspernatur est dolorum vero neque maxime unde quam non excepturi aliquid quia earum quisquam sunt.'
  },

  {
    avatar: AVATAR,
    name: 'Name3',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, in ea doloribus nam assumenda adipisci aspernatur est dolorum vero neque maxime unde quam non excepturi aliquid quia earum quisquam sunt.'
  }

]

export const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container'
      // install Swiper modules
      modules={[Pagination, Navigation]}
      spaceBetween={40}
      slidesPerView={1}
      Navigation
      pagination={{ clickable: true }}
      >
      
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className='client__avatar'>
                  <img src={avatar} alt='Avatar' />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
        
        
      </Swiper>
    </section>
  )
}

export default Testimonials