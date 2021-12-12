import axios from "axios";
import { GetServerSideProps } from "next";
import Head from "next/head";

import { SearchCard } from "../../components/SearchCard";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await axios.get("http://localhost:2/search");
  return {
    props: {
      term: context.params.term,
      data: response.data,
    },
  };
};

export default function Search({ term, data }) {
  return (
    <>
      <Head>
        <title>Search - {term}</title>
      </Head>
      {data.map(() => (
        <SearchCard key={Math.random()} />
      ))}
    </>
  );
}
