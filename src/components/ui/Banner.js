import React from 'react';
import bg from "../../Assets/bg-8.png"
import Image from 'next/image';
import mouse from "../../Assets/mouse.png"
const Banner = () => {

    return (
        <div className='background h-screen relative'>
            <h1 className=' absolute hidden md:block text-[320px] font-semibold top-1/4  left-1/4 text-[#f4d84a1e]'>Mouse</h1>
            <div className='flex justify-center items-center w-9/12 mx-auto pt-40'>

                <div className='text-[#24262B]'>
                    <h3 className='text-7xl font-semibold tracking-wider'>ASSUS P305 TUF M3 Gaming Mouse</h3>
                    <p className='text-4xl mt-4 font-semibold'>$34</p>
                    <button className='mt-4 px-8 py-4 border-2 border-[#F4D94A]
                    text-lg tracking-widest'>See Details</button>
                </div>
                <div>
                    <Image src={mouse} alt="mouse" width={900} className='' />
                </div>
            </div>

        </div>
    );
};

export default Banner;