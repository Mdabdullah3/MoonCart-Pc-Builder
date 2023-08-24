import React from 'react';
import { FaCircle } from 'react-icons/fa';

const CustomSwiperPagination = ({ activeIndex, onSlideChange, totalSlides }) => {
    const handleBulletClick = (index) => {
        onSlideChange(index);
    };

    return (
        <div className="flex justify-center items-center mt-4">
            {Array?.from({ length: totalSlides }).map((_, index) => (
                <span
                    key={index}
                    className={`text-xl mx-2 cursor-pointer ${index === activeIndex ? 'text-orange-500' : 'text-gray-500'}`}
                    onClick={() => handleBulletClick(index)}
                >
                    <FaCircle />
                </span>
            ))}
        </div>
    );
};

export default CustomSwiperPagination;
