import axios from "axios";
import { GetStaticProps } from "next";
import Head from "next/head";
import { Card } from "../components/Card";

export const getStaticProps: GetStaticProps = async () => {
  const response = await axios.get("http://localhost:2/index");
  return {
    props: {
      data: response.data,
    },
  };
};

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>series App</title>
      </Head>
      {data.map(() => (
        <Card key={Math.random()} />
      ))}
    </>
  );
}
