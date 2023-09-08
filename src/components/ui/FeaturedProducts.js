import Link from "next/link";
import ProductCard from "./ProductCard";

const FeaturedProducts = ({ product }) => {
    console.log(product);
    return (
        <div className='mt-20 relative'>
            <h1 className=' absolute top-0 font-semibold text-[#f4d84a1e] text-[220px] left-1/4'>Products</h1>
            <h1 className='text-2xl font-semibold tracking-wider text-center'>Our Products</h1>
            <h1 className='text-lg tracking-wider text-center mt-1'>Check & Get Your Desired Product & Trending Products</h1>
            <div className='grid w-10/12 gap-10 mx-auto grid-cols-1 md:grid-cols-3 mt-20'>
                {
                    product?.slice(0, 6).map(product => <>
                        <ProductCard key={product?.id} product={product}></ProductCard>
                    </>)
                }

            </div>
            <div className='flex justify-center w-11/12 mx-auto mt-14'>
                <Link href="/product" className='transition ease-in duration-300  items-center text-md font-medium mb-2 md:mb-0 px-5 py-2 hover:shadow-lg tracking-wider hover:text-white rounded-md hover:bg-[#F4D94A] border-2 border-[#F4D94A]'>See All Product</Link>
            </div>
        </div>
    );
};

export default FeaturedProducts;

