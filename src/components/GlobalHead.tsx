import Head from 'next/head';

const GlobalHead = () => {
  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      <title>Next.js BoilerPlate</title>
      <meta name="description" content="Next.js BoilerPlate Project" />
    </Head>
  );
};

export default GlobalHead;
