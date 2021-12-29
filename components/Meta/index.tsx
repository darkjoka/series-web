import Head from "next/head";

export const Meta = ({
  title,
  description,
  image,
  keywords = "",
}: {
  title: string;
  description: string;
  image: string;
  keywords?: string;
}) => {
  image = `${process.env.NEXT_PUBLIC_BACKEND_HOST}image/${image}`;
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content={`series, free series,free tv Series,series download, free download, free series download, ${keywords}`}
      />

      {/* Google/ Search engine tags  */}
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      <meta itemProp="image" content={image} />

      {/* Facebook */}
      <meta property="og:url" content="" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
};
