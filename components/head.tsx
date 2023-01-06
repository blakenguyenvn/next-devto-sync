import Head from 'next/head';

interface DefaultHeadProps {
  pageTitle: string;
}
export const DefaultHead = ({ pageTitle }: DefaultHeadProps) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
    </>
  )
}