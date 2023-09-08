import ProductCard from '@/components/ui/ProductCard';
import { getAllProducts } from '../../../api';
import RootLayout from '@/components/layout/RootLayout';

const Products = ({ products }) => {
    console.log(products);
    return (
        <div className='py-40 relative'>
            <h1 className=' absolute top-20 font-semibold text-[#f4d84a1e] text-[220px] left-1/4'>Products</h1>
            <h1 className='text-2xl font-semibold tracking-wider text-center'>Our Products</h1>
            <h1 className='text-lg tracking-wider text-center mt-1'>Check & Get Your Desired Product & Trending Products</h1>
            <div className='grid w-10/12 gap-10 mx-auto grid-cols-1 md:grid-cols-3 mt-20'>
                {
                    products?.map(productItem => (
                        <ProductCard key={productItem?.id} product={productItem}></ProductCard>
                    ))
                }
            </div>
        </div>
    );
};

export default Products;

Products.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};
export async function getStaticProps() {
    const products = await getAllProducts();
    return {
        props: {
            products,
        },
        revalidate: 10,
    };
}
