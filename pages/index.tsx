import axios from "axios";
import { GetStaticProps } from "next";
import Head from "next/head";
import React from "react";
import useSWR from "swr";
import { Card } from "../components/Card";
import { CardProps } from "../shared/constants/types";
import { useObserver } from "../shared/hooks/useObserver";

const dayInSeconds = 60 * 60 * 24;

export const getStaticProps: GetStaticProps = async () => {
  const response = await axios.get(process.env.BACKEND_HOST);
  return {
    props: {
      info: response.data.data,
    },
    revalidate: dayInSeconds,
  };
};

const fetcher = (url: string) => url && axios.get(url).then((response) => response.data.data);

export default function Home({ info }: { info: [CardProps] }) {
  const [ref, onScreen, observer] = useObserver({});
  const [cursor, setCursor]: any = React.useState(info.length);
  const [series, setSeries]: any = React.useState(info);
  const [loadError, setLoadError] = React.useState(false);

  const loadData = onScreen && !loadError;

  const { data, error } = useSWR<[CardProps], any>(
    loadData ? `${process.env.NEXT_PUBLIC_BACKEND_HOST}${cursor}` : "",
    fetcher
  );

  if (data) {
    const newSeries = series.concat(data);
    setCursor(newSeries.length);
    setSeries(newSeries);
  }

  if (error) {
    setLoadError(true);
  }

  return (
    <>
      <Head>
        <title>series App</title>
      </Head>
      {series.map((info: CardProps) => (
        <Card key={info.title} {...info} />
      ))}
      {loadError ? (
        <div
          onClick={() => {
            setLoadError(false);
          }}
        >
          An Error occurred. Click to try again
        </div>
      ) : (
        <div ref={ref}>Loading...</div>
      )}
    </>
  );
}
