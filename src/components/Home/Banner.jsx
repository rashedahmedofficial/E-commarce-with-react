import React from 'react'
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import SliderLib from 'react-slick';
const Slider = SliderLib.default || SliderLib;

const slides = [
  { id: 1, image: "/Banner-1.png" },
  { id: 2, image: "/Banner-2.png" },
  { id: 3, image: "/Banner-3.png" },
  { id: 4, image: "/Banner-4.png" },
  { id: 5, image: "/Banner-5.png" },
];

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots: dots => (
      <div>
        <ul className='flex gap-2 absolute bottom-3 left-1/2 -translate-x-1/2'>
          {dots}
        </ul>
      </div>
    ),
    customPaging: i => (
      <button className='w-1 md:w-3 h-1 md:h-3 bg-white rounded-full'></button>
    ),
  };

  return (
    <section>
      <div className="container pt-4 flex gap-4 md:gap-7">

        <div className='w-[66%] h-[50%] pt-2'>
          <Slider {...settings}>
            {slides.map((slide) => (
              <div key={slide.id}>
                <img
                  src={slide.image}
                  alt={`Banner ${slide.id}`}
                  className='w-full object-cover'
                />
              </div>
            ))}
          </Slider>
        </div>

        <div className='w-[34%] flex flex-col space-y-3.5 md:space-y-7'>
          <Link to="/shop?category=groceries">
            <img src="/Banner-right-1.png" alt="" className='w-full pt-1.5' />
          </Link>
          <Link to="/shop?category=beauty">
            <img src="/Banner-right-2.png" alt="" className='w-full' />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Banner;