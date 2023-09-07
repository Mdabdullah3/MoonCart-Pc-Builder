import RootLayout from '@/components/layout/RootLayout';
import ProductCard from '@/components/ui/ProductCard';
import { productData } from '@/components/ui/ProductsData';
import { useRouter } from 'next/router';
import React from 'react';

const Categori = () => {
    const router = useRouter();
    const { category } = router.query
    const product = productData
    console.log(category);
    const categoriFilter = product?.filter((item) => item?.categori === (category.toString()));
    console.log("filter data", categoriFilter);
    return (
        <div>
            <h1>This is {category}</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 w-10/12 mx-auto gap-10 mt-20'>
                {
                    categoriFilter.map((product) => <>
                        <ProductCard key={product?.id} product={product} />
                    </>)
                }
            </div>
        </div>
    );
};

export default Categori;
Categori.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};