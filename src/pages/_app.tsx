/* eslint-disable react/jsx-props-no-spreading */
import GlobalStyles from '@/components/GlobalStyles';
import type { AppProps } from 'next/app';
import GlobalHead from '../components/GlobalHead';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalHead />
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
