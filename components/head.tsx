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
        <link href="https://dev.to/assets/minimal-8083135cba967b5cddc25d4405da1b640618feb0c1642e24fde482c774d51ad6.css" rel="stylesheet" />
        <link href="https://dev.to/assets/views-cb47fa9f252673424fa10d936d347912603f5bb291535c4ac47e62903c89ff8a.css" rel="stylesheet" />
        <link href="https://dev.to/assets/crayons-7502ebc4d8178bb46e28da0c05561ed290f8557e98f6b02b32ad3d93062b4926.css" rel="stylesheet" />
        <link href="https://dev.to/assets/react-dates/lib/css/_datepicker-efc367057e7f65b7734d69877fab4ee5db2e2054b468b8768da4bc8e82c1b059.css" rel="stylesheet" />
        <link href="https://dev.to/assets/crayons-7502ebc4d8178bb46e28da0c05561ed290f8557e98f6b02b32ad3d93062b4926.css" rel="stylesheet" />
      </Head>
    </>
  )
}