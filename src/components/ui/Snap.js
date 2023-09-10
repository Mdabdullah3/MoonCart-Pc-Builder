import React from 'react';
import offer from "../../Assets/offer-banner-1.webp"
import offer2 from "../../Assets/offer-banner-2.jpg"
import Image from 'next/image';
const Snap = () => {
    return (
        <div className='mt-40 md:flex'>
            <div className='relative'>
                <Image src={offer} alt='offer-img' />
                <div className='absolute md:top-40 top-10 text-white right-20'>
                    <h1 className='text-lg uppercase tracking-wider mb-2'>Get up to 50% off</h1>
                    <h1 className='text-2xl font-semibold tracking-wider capitalize'> Bluetooth headphones </h1>
                    <button className='transition ease-in duration-300 inline-flex items-center text-md font-medium mb-2 md:mb-0 px-5 py-2 hover:shadow-lg tracking-wider hover:text-white mt-4 hover:bg-[#F4D94A] border-2 border-[#F4D94A]'>See Details</button>
                </div>
            </div>
            <div className='relative'>
                <Image src={offer2} alt='offer-img' />
                <div className='absolute md:top-40 top-10 text-white right-20'>
                    <h1 className='text-lg uppercase tracking-wider mb-2'>Get up to 30% off</h1>
                    <h1 className='text-2xl font-semibold tracking-wider capitalize'>  Laptop I5 collection  </h1>
                    <button className='transition ease-in duration-300 inline-flex items-center text-md font-medium mb-2 md:mb-0 px-5 py-2 hover:shadow-lg tracking-wider hover:text-white mt-4 bg-[#F4D94A] border-2 hover:bg-transparent border-[#F4D94A]'>See Details</button>
                </div>
            </div>

        </div>
    );
};

export default Snap;