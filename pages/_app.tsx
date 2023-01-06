import { AppProps } from 'next/app';
import { DefaultHead } from 'components/Head';
import { MantineProvider } from '@mantine/core';
import '../styles/globals.css'
import '../styles/postLibraries.css';
import '../styles/postMinimal.css';
import '../styles/postView.css';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <DefaultHead pageTitle={`SimflexCloud`} />
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: 'dark',
          breakpoints: {
            xs: 500,
            sm: 800,
            md: 1000,
            lg: 1200,
            xl: 1400,
          },
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}