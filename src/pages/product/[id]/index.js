import RootLayout from '@/components/layout/RootLayout';
import Image from 'next/image';
import React from 'react';

const ProductDetails = ({ product }) => {
    return (
        <section className="pt-40 pb-10">
            <div className="max-w-6xl px-4 mx-auto">
                <div className="flex flex-wrap mb-24 -mx-4">
                    <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">
                        <div className="sticky top-0 overflow-hidden">
                            <div className="relative mb-6 lg:mb-10 lg:h-96">
                                <Image className="object-contain w-full lg:h-full" src={product?.img} alt="" width={600} height={600} />
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2 text-[]">
                        <div className="lg:pl-20">
                            <div className="mb-6">
                                <span className="px-4 py-2 rounded-full bg-[#F4D94A] text-md ">New Arrival</span>
                            </div>
                            <h1 className="text-3xl font-semibold tracking-wider">{product?.name}</h1>
                            <p className="mt-2 text-sm tracking-wide">{product?.description}</p>
                            <div className="mt-6">
                                <div className="flex items-center">
                                    <span className="text-2xl font-semibold text-[#F4D94A]">${product?.price} </span>
                                    <s className="ml-2 text-sm text-gray-500 dark:text-gray-400">${(product.price * 40 / 29).toFixed(2)}</s>
                                    <span className="ml-2 text-sm text-red-500 dark:text-red-400">Save 29%</span>
                                </div>
                                <div className="mt-4 space-y-3">
                                    <div className="flex items-center">
                                        <span className="px-3 py-3 rounded-full text-white text-xl font-semibold bg-[#F4D94A]">4.8</span>
                                        <span className="ml-2 text-sm ">(24 reviews)</span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="text-sm">Categori-</span>
                                        <span className="ml-2 text-lg capitalize text-[#F4D94A]">{product?.categori}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetails;

ProductDetails.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
    const res = await fetch(`http://localhost:3000/api/products`);
    const products = await res.json();

    const paths = products?.data.map((product) => ({
        params: { id: product._id },
    }));

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async ({ params }) => {
    const { id } = params;

    const res = await fetch(`http://localhost:3000/api/products/${id}`);
    const product = await res.json();

    return {
        props: {
            product: product?.data,
        },
    };
};