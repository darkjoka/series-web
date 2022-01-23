import axios from "axios";
import { GetServerSideProps } from "next";
import Head from "next/head";

import { Heading } from "../../components/Heading";
import { SearchCard } from "../../components/SearchCard";
import { SearchCardProps } from "../../shared/constants/types";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await axios.get(`${process.env.BACKEND_HOST}search/${context.params.term}`);
  const data = response.data.data;
  const term = context.params.term;
  return {
    props: {
      term,
      data,
    },
  };
};

export default function Search({ term, data }: { data: [SearchCardProps]; term: string }) {
  return (
    <>
      <Head>
        <title>Search - {term}</title>
      </Head>
      <Heading>Search Results: {term}</Heading>
      {data.map((info) => (
        <SearchCard key={info.permalink} {...info} />
      ))}
    </>
  );
}
