import Head from 'next/head';

/*
  Interface
*/
interface HeadMetaProps {
  title?: string;
  description?: string;
  isCrawling?: boolean;
}

/*
  Component
*/
const HeadMeta = ({ title, description, isCrawling = true }: HeadMetaProps) => {
  return (
    <Head>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      <meta name="robots" content={isCrawling ? 'index, follow' : 'noindex, nofollow'} />
    </Head>
  );
};

export default HeadMeta;
