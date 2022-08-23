/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';
import GlobalHead from '../components/GlobalHead';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalHead />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
