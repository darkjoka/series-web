import axios from "axios";
import { GetServerSideProps } from "next";
import Head from "next/head";
import React from "react";
import { Card } from "../../components/Card";
import { Loader } from "../../components/Loader";

import { SearchCard } from "../../components/SearchCard";
import { SearchCardProps } from "../../shared/constants/types";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await axios.get(`${process.env.BACKEND_HOST}search/${context.params.term}`);
  return {
    props: {
      term: context.params.term,
      data: response.data.data.data,
      length: response.data.data.length,
    },
  };
};

export default function Search({ term, data, length }: { data: [SearchCardProps]; term: string; length: number }) {
  const [cursor, setCursor] = React.useState(data.length);
  const [series, setSeries] = React.useState<any>(data);

  const updater = (data) => {
    if (data) {
      const newSeries = series.concat(data.data);
      setCursor(newSeries.length);
      setSeries(newSeries);
    }
  };

  console.log(length);
  console.log(series);

  const url = `${process.env.NEXT_PUBLIC_BACKEND_HOST}search/${term}/${cursor}`;

  console.log(url);
  return (
    <>
      <Head>
        <title>Search - {term}</title>
      </Head>
      {series.map((info) => (
        <Card key={info.permalink} {...info} />
      ))}
      {cursor < length ? <Loader url={url} handler={updater} /> : ""}
    </>
  );
}
