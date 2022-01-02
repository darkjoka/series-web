import axios from "axios";
import { GetStaticProps } from "next";
import React from "react";

import { Card } from "../components/Card";
import { Loader } from "../components/Loader";
import { Meta } from "../components/Meta";
import { CardProps } from "../shared/constants/types";

const dayInSeconds = 60 * 60 * 24;

export const getStaticProps: GetStaticProps = async () => {
  const response = await axios.get(process.env.BACKEND_HOST);
  const info: CardProps[] = response.data.data;
  const metaImage = info[Math.floor(Math.random() * info.length)].imageSrc;
  return {
    props: {
      info,
      metaImage,
    },
    revalidate: dayInSeconds,
  };
};

export default function Home({ info, metaImage }: { info: [CardProps]; metaImage: string }) {
  const [cursor, setCursor]: any = React.useState(info.length);
  const [series, setSeries]: any = React.useState(info);

  const updater = (data) => {
    if (data) {
      const newSeries = series.concat(data);
      setCursor(newSeries.length);
      setSeries(newSeries);
    }
  };

  const url = `${process.env.NEXT_PUBLIC_BACKEND_HOST}${cursor}`;

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
      <Loader url={url} handler={updater} />
    </>
  );
}
