/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";
import { AiTwotoneStar } from 'react-icons/ai';
import CustomSwiperPagination from './SwiperPagination';
import { FaCircle } from 'react-icons/fa';
import { reviewsData } from './reviesData';
const Reviews = () => {
    const reviews = reviewsData
    const [activeIndex, setActiveIndex] = useState(0);

    const handleSlideChange = (swiper) => {
        setActiveIndex(swiper.activeIndex);
    };

    return (
        <div className='my-32 relative'>
            <h1 className="text-center text-2xl font-semibold font-mono">
                Customers Reviews
            </h1>
            <h1 className="text-center text-lg capitalize font-mono">
                Checkout What Our Customers are Saying About us
            </h1>
            <div>
                <Swiper
                    slidesPerView={1}
                    centeredSlides={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        el: '.custom-swiper-pagination',
                        clickable: true,
                    }}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper w-8/12"
                    // style={customPaginationStyle}
                    onSlideChange={handleSlideChange}
                >
                    <>
                        {reviews.map((item) => (
                            <SwiperSlide key={item?.name}>
                                <div className="card card-side grid md:grid-cols-2 pb-14 pt-20 grid-cols-1 px-2 items-center">
                                    <img className="w-80 h-80 mx-auto" src={item.img} alt="" />
                                    <div className="items-center font-mono">
                                        <h2 className="text-secondary mb-2 text-xl font-semibold">
                                            {item.name}
                                        </h2>
                                        <h2 className="text-secondary text-3xl font-semibold">
                                            {item.address}
                                        </h2>

                                        <p className="text-secondary text-[18px] mt-4">{item.description}.</p>
                                        <div className="flex justify-start mt-3 gap-3">
                                            {Array?.from(Array(parseInt(item?.rating)), (e, i) => (
                                                <AiTwotoneStar
                                                    key={i}
                                                    className="w-6 text-4xl text-yellow-500"
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </>
                </Swiper>
                <div className='absolute bottom-0 left-0 right-0 flex justify-center mt-4'>
                    {reviews.map((_, index) => (
                        <span
                            key={index}
                            className={`mx-2 cursor-pointer ${index === activeIndex ? 'text-xl -mt-1' : 'text-[10px]'
                                }`}
                        >
                            <FaCircle style={{ color: index === activeIndex ? '#f4d94a' : '#cccccc82' }} />
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Reviews;