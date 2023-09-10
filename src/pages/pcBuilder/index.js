import RootLayout from '@/components/layout/RootLayout';
import { categoriData } from '@/components/ui/CategoriData';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';

const PcBuilder = () => {
    const categoriItems = categoriData
    const pcComponents = useSelector((state) => state?.pcBuilder?.pc);
    console.log(pcComponents);

    return (
        <div className='py-40 bg-white'>
            <div className='pb-10 rounded-xl bg-white w-9/12 px-20 mx-auto border-2 border-gray-500'>
                <h1 className='py-10 text-2xl font-semibold tracking-wider'>PC Builder - Build your own PC here!</h1>
                <hr />
                <div className='my-4'>
                    <h1 className='text-lg tracking-wider my-4'>Core Components</h1>
                    <div className='flex flex-col'>
                        {
                            categoriItems?.map(item => <>
                                <div className='border-2 p-4 border-gray-300 mb-4 rounded-xl'>
                                    <div className='flex items-center justify-between '>
                                        <div className='flex gap-4 items-center rounded-md'>
                                            <Image src={item?.icon} alt="" width={80} />
                                            <h1 className='text-lg tracking-wider'>{item.name}</h1>
                                        </div>
                                        <div>
                                            <Link className='border-2 border-[#F4D94A] px-4 py-2 bg-[#F4D94A] text-white' href={`/pcBuilder/choose/${item.categor}`}>Choose</Link>
                                        </div>
                                    </div>
                                    <div className='py-4 flex items-center gap-10 justify-center'>
                                        <div>
                                            <img className='w-20' src={pcComponents?.[item.categor]?.img} alt="" />
                                        </div>
                                        <div>
                                            {
                                                pcComponents?.[item?.categor]?.name && <div>
                                                    <h1>{pcComponents?.[item.categor]?.name}</h1>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </div>

                            </>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PcBuilder;
PcBuilder.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};