import axios from "axios";
import { GetStaticProps } from "next";
import Head from "next/head";
import { Card } from "../components/Card";
import { CardProps } from "../shared/constants/types";

export const getStaticProps: GetStaticProps = async () => {
  const response = await axios.get("http://localhost:2/index");
  return {
    props: {
      data: response.data,
    },
  };
};

export default function Home({ data }: { data: [CardProps] }) {
  return (
    <>
      <Head>
        <title>series App</title>
      </Head>
      {data.map((info) => (
        <Card key={info.title} {...info} />
      ))}
    </>
  );
}
