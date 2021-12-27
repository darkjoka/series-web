import axios from "axios";
import { GetServerSideProps } from "next";
import Head from "next/head";

import { Card } from "../../components/Card";
import { CardProps } from "../../shared/constants/types";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await axios.get(`${process.env.BACKEND_HOST}filter/${context.params.filter}`);
  return {
    props: {
      filter: context.params.filter,
      data: response.data.data,
    },
  };
};

export default function Filter({ filter, data }: { data: [CardProps]; filter: string }) {
  return (
    <>
      <Head>
        <title>Filter - {filter}</title>
      </Head>

      {data.map((info) => (
        <Card key={info.title} {...info} />
      ))}
    </>
  );
}
