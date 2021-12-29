import axios from "axios";
import { GetStaticProps } from "next";
import Head from "next/head";
import React from "react";
import useSWR from "swr";
import { Card } from "../components/Card";
import { Loader } from "../components/Loader";
import { Meta } from "../components/Meta";
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

  const metaImage = info[Math.floor(Math.random() * info.length)].imageSrc;

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
      <Meta
        title="Series App"
        description="New Series with high quality and low size 150 mb in HD and 480p ,direct download with fastest speed ,newest tv series update."
        image={metaImage}
        keywords="drama, action, action series, history series, history, thriller, thriller series, comedy, comedy series"
      />
      {series.map((info: CardProps) => (
        <Card key={info.title} {...info} />
      ))}
      <Loader error={loadError} handler={() => setLoadError(false)} ref={ref} />
    </>
  );
}
