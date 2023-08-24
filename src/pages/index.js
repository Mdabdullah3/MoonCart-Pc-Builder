import RootLayout from '@/components/layout/RootLayout';
import Banner from '@/components/ui/Banner';
import Brands from '@/components/ui/Brands';
import Categori from '@/components/ui/Categori';
import Products from '@/components/ui/Products';
import Reviews from '@/components/ui/Reviews';
import Service from '@/components/ui/Service';
import Snap from '@/components/ui/Snap';
import Head from 'next/head';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="Home" description="this page in created by next js" />
      </Head>
      <Banner />
      <Products />
      <Categori />
      <Snap />
      <Brands />
      <Reviews />
      <Service />

    </div>
  );
};

export default HomePage;
HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};