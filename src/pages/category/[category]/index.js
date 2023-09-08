import RootLayout from '@/components/layout/RootLayout';
import ProductCard from '@/components/ui/ProductCard';
import { productData } from '@/components/ui/ProductsData';
import { useRouter } from 'next/router';
import React from 'react';

const Category = ({ products }) => {
    const router = useRouter();
    const { category } = router.query;
    console.log(category);

    // Filter products based on the category
    const categoryProducts = products.filter((item) => item.categori === category.toString());

    return (
        <div className=' relative'>
            <h1 className='pt-40 text-3xl capitalize text-center font-semibold tracking-wider'><span className='text-[#F4D94A]'>{category} </span>Devices</h1>
            <h1 className=' capitalize absolute top-20 font-semibold text-[#f4d84a1e] text-[220px] left-1/4'>{category}</h1>
            <h1 className='text-lg tracking-wider text-center mt-1'>Check & Get Your Desired Product & Trending Products</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 w-10/12 mx-auto gap-10 my-20'>
                {categoryProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
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
            products: allProduct?.data,
        },
        revalidate: 10,
    };
};
