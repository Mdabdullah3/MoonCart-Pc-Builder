import RootLayout from '@/components/layout/RootLayout';
import Banner from '@/components/ui/Banner';
import Brands from '@/components/ui/Brands';
import Categori from '@/components/ui/Categori';
import Reviews from '@/components/ui/Reviews';
import Service from '@/components/ui/Service';
import Snap from '@/components/ui/Snap';
import Head from 'next/head';
import React from 'react';
import Products from './product';

const HomePage = ({ products }) => {
  console.log(products);
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="Home" description="this page in created by next js" />
      </Head>
      <Banner />
      <Products product={products} />
      <Categori />
      <Snap />
      <Brands />
      <Service />
      <Reviews />

    </div>
  );
};

export default HomePage;
HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/products");
  const allProduct = await res.json();
  console.log(allProduct);
  return {
    props: {
      products: allProduct?.data,
    },
    revalidate: 10,
  };
};