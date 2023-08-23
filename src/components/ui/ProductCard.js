/* eslint-disable @next/next/no-img-element */
import React from 'react';

const ProductCard = ({ product }) => {
    console.log(product);
    return (
        <div className='bg-white shadow-xl py-8 rounded-3xl relative'>
            <img className='w-72 mx-auto h-60 pb-6' src={product.img} alt="product" />
            <div className='px-10'>
                <h1 className='text-lg tracking-wider font-semibold'>{product.name}</h1>
                <h1 className='text-[#F4D94A] text-3xl tracking-wider py-2 font-semibold'>${product.price}.00</h1>
                <div className='text-sm absolute top-4 right-2 rounded-md px-4 py-2 bg-[#F4D94A] text-white'>{product?.stock === true ? <h1> In Stock</h1> : <h1>Stock Out</h1>
                }</div>
                <h1 className='text-xl tracking-wider capitalize'>{product.categori}</h1>
                <h1 className='mt-2 tracking-wider text-md'>{product?.description.slice(0, 100)}</h1>
                <div class="flex mt-6 gap-6 text-sm font-medium justify-center">
                    <button class="transition ease-in duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 bg-[#F4D94A] px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-full hover:bg-transparent border-2 border-[#F4D94A] ">
                        Order Now
                    </button>


                    <button class="transition ease-in duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 px-5 py-2 hover:shadow-lg tracking-wider hover:text-white rounded-full hover:bg-[#F4D94A] border-2 border-[#F4D94A] ">
                        See Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;