import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from '../assets/slider-1.jpg';
import slider2 from '../assets/slider-2.jpg';
import slider3 from '../assets/slider-4.jpg'; 
import slider4 from '../assets/school-main.jpg';

const sliderData = [
    {
        id: 0,
        image: slider4,
        title: "Springdale Public School",
        description: "Empowering Minds Through Excellence in Education",
    },
    {
        id: 1,
        image: slider1,
        title: "Annual Sports Day",
        description: "Celebrating Excellence in Sports",
    },
    {
        id: 2,
        image: slider2,
        title: "Science Exhibition",
        description: "Showcasing Student Innovations",
    },
    {
        id: 3,
        image: slider3,
        title: "Cultural Fest",
        description: "Embracing Diversity and Creativity",
    },
];

const HeroSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
    };

    return (
        <div className='relative w-full'>
            <Slider {...settings} className='overflow-hidden'>
                {sliderData.map((item) => (
                    <div key={item.id} className='relative h-[80vh]'>
                        <img
                            className='absolute inset-0 h-full w-full object-cover'
                            src={item.image}
                            alt={`Slide ${item.id}`}
                        />
                        <div className='absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent'></div>
                        <div className='absolute inset-0 flex flex-col justify-end p-8'>
                            <h1 className='text-3xl font-bold text-white'>{item.title}</h1>
                            <p className='mt-4 text-lg text-gray-300'>{item.description}</p>
                        </div>
                    </div>
                ))}
            </Slider>
            
        </div>
    );
}

export default HeroSlider;
