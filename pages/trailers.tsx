import axios from "axios";
import { GetStaticProps } from "next";
import React, { useState } from "react";

import { Meta } from "../components/Meta";
import TrailerCard from "../components/trailerCard";
import { TrailerProps } from "../shared/constants/types";

const dayInSeconds = 60 * 60 * 24;

interface PageProps {
  data: [TrailerProps];
  metaImage: string;
  keywords: string;
  setDialog: (value: boolean) => void;
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await axios.get(`${process.env.BACKEND_HOST}trailers`);
  const data: [TrailerProps] = response.data.data;

  const metaImage = data[Math.floor(Math.random() * data.length)].thumbnailSrc;
  const titles = data.map(({ title }) => title);
  const productions = data.map(({ production }) => production);
  const productionSet = new Array(new Set(productions));
  const keywordArr = [...titles, ...productionSet];
  const keywords = keywordArr.join(", ");

  return {
    props: {
      data,
      metaImage,
      keywords,
    },
    revalidate: dayInSeconds,
  };
};

export default function App({
  data,
  metaImage,
  keywords,
  setDialog,
}: PageProps) {
  return (
    <>
      <Meta
        title="Series App - Trailers"
        image={metaImage}
        description="Watch trailers of the latest tv series"
        keywords={keywords}
      />
      <div />
      {data.map((info) => (
        <TrailerCard key={info.permalink} {...info} />
      ))}
    </>
  );
}
