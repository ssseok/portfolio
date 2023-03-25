import Head from "next/head";

interface ISeo {
  title: string;
  content: string;
}

export default function Seo({ title, content }: ISeo) {
  return (
    <Head>
      <title>개발자 박현석 | {title}</title>
      <meta name="description" content={content} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
