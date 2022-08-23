/* eslint-disable react/jsx-props-no-spreading */
import GlobalStyles from '@/components/GlobalStyles';
import $queryClient from '@/libs/queryClient';
import { Hydrate, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import GlobalHead from '../components/GlobalHead';

const MyApp = ({ Component, pageProps }: AppProps) => {
  // useState
  const [queryClient] = useState($queryClient);

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <GlobalHead />
        <GlobalStyles />
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  );
};

export default MyApp;
