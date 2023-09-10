import RootLayout from '@/components/layout/RootLayout';
import ProductCard from '@/components/ui/ProductCard';
import { addToPc } from '@/redux/features/pcBuilder/pcBuilderSlice';
import { useRouter } from 'next/router';
import React from 'react';
import { useDispatch } from 'react-redux';

const Category = ({ categoryItems }) => {
    const router = useRouter()
    const { category } = router.query
    const categoryProducts = categoryItems.filter((item) => item.categori === category.toString());

    console.log(categoryProducts);

    const dispatch = useDispatch()

    const handleAddToBuild = (product) => {
        const data = {
            category,
            product
        }
        dispatch(addToPc(data))
        router.push("/pcBuilder")
    }

    return (
        <div className='relative'>
            <h1 className='pt-40 text-3xl capitalize text-center font-semibold tracking-wider'><span className='text-[#F4D94A]'>{category} </span>Devices</h1>
            <h1 className=' capitalize absolute top-20 font-semibold text-[#f4d84a1e] text-[220px] left-1/4'>{category}</h1>
            <h1 className='text-lg tracking-wider text-center mt-1'>Check & Get Your Desired Product & Trending Products</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 w-10/12 mx-auto gap-10 my-20'>
                {
                    categoryProducts.map(product => <>
                        <div className=' relative'>
                            <ProductCard product={product}>
                            </ProductCard>

                            {
                                product?.stock == false ? "" : <button onClick={() => handleAddToBuild(product)} className='bg-[#F4D94A] px-5 text-white rounded-full py-2 absolute bottom-8 right-10'>Add To Build</button>
                            }
                        </div>
                    </>)
                }
            </div>
        </div>
    );
};

export default Category;


Category.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
    const res = await fetch("http://localhost:3000/api/products");
    const allProduct = await res.json();

    // Extract unique categories from your data
    const uniqueCategories = [...new Set(allProduct?.data.map((product) => product.categori))];

    // Generate paths for each unique category
    const paths = uniqueCategories.map((category) => ({
        params: { category },
    }));

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async () => {
    const res = await fetch("http://localhost:3000/api/products");
    const allProduct = await res.json();

    return {
        props: {
            categoryItems: allProduct?.data,
        },
        revalidate: 10,
    };
};
