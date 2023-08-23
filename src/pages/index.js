import RootLayout from '@/components/layout/RootLayout';
import Head from 'next/head';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="Home" description="this page in created by next js" />
      </Head>
      <h1>This is Home</h1>
    </div>
  );
};

export default HomePage;
HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};