import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../App.css';

// Sample data for testimonials
const cards = [
    {
        id: 1,
        name: 'Ishita Raina',
        description: 'Absolutely loved the product and services offered. The journal turned out amazing. Not just the product but also the way it was packaged and shipped. Would definitely consider buying again.',
    },
    {
        id: 2,
        name: 'Harshita',
        description: 'The quality of the cards are amazing! The packaging is also very good. I ordered a birthday card and a photo frame and both of them were really good. I would definitely recommend this to everyone.',
    },
    {   
        id: 3,
        name: 'Sakshi',
        description: "I ordered a vintage card for my boyfriend and a photo frame and both of them were really good. it's a great gift for your loved ones. I would definitely recommend this to everyone."
    }
]

const Testimonials = () => {
    const settings = {
      dots: true, // Show dots for navigation by default
      infinite: false,
      arrows: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      swipeToSlide: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            dots: true, // Show dots for screens less than 1024px (mobile)
          },
        },
      ],
    };
  
    return (
      <div className="bg-[#f5efe3]">
        <div className='mx-auto max-w-2xl px-4 py-6 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900">More from our Collections</h2>
          <Slider {...settings} className="slick-custom mt-6">
            {cards.map((testimonial) => (
              <div key={testimonial.id} className="p-2 text-center grid grid-cols-4">
                <div className="bg-[#ECE6D9] p-4 rounded-lg overflow-hidden group">
                  <h3 className="text-lg md:text-xl font-medium px-4 py-2">{testimonial.name}</h3>
                  <div className="px-4 py-2">
                    <p className="text-sm md:text-base font-light text-gray-900 leading-loose tracking-wider">{testimonial.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  };
  
  export default Testimonials;