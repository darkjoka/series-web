import axios from "axios";
import { GetServerSideProps } from "next";
import Head from "next/head";

import { Card } from "../../components/Card";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await axios.get("");
  return {
    props: {
      filter: context.params.filter,
      data: response.data,
    },
  };
};

export default function Filter({ filter, data }) {
  return (
    <>
      <Head>
        <title>Filter - {filter}</title>
      </Head>

      {data.map(() => (
        <Card key={Math.random()} />
      ))}
    </>
  );
}
