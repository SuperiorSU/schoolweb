import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from '../assets/slider-1.jpg';
import slider2 from '../assets/slider-2.jpg';
import slider3 from '../assets/slider-4.jpg';
const HeroSlider = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
    };

    const obj = [
        {
            id: 1,
            image: slider1,
        },
        {
            id: 2,
            image: slider2,
        },
        {
            id: 3,
            image: slider3,
        },
    ];

    return (
        <div className='p-5 rounded-lg'>
            <div className='max-w-full'>
                <Slider {...settings} className='overflow-hidden'>
                    {
                        obj.map((item) => {
                            return (
                                <div key={item.id} className='lg:h-[70vh]'>
                                    <img className='max-w-full object-cover rounded-lg' src={item.image} alt={`Slide ${item.id}`} />
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
        </div>
    );
}

export default HeroSlider;
