import axios from "axios";
import { GetStaticProps } from "next";
import { useState } from "react";

import { Dialog } from "../components/Dialog";
import { Heading } from "../components/Heading";
import { Meta } from "../components/Meta";
import { WideCard } from "../components/WideCard";
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

export default function App({ data, metaImage, keywords, setDialog }: PageProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentTrailer, setCurrentTrailer] = useState("");

  const closeDialog = () => {
    setIsDialogOpen(false);
    setCurrentTrailer("");
    setDialog(false);
  };

  const openDialog = (trailer: string) => {
    setCurrentTrailer(trailer);
    setIsDialogOpen(true);
    setDialog(true);
  };

  return (
    <>
      <Meta
        title="Series App - Trailers"
        image={metaImage}
        description="Watch trailers of the latest tv series"
        keywords={keywords}
      />
      <Heading>Trailers</Heading>
      {data.map((info) => (
        <WideCard key={info.permalink} {...info} open={openDialog} />
      ))}
      <Dialog isOpen={isDialogOpen} trailer={currentTrailer} close={closeDialog} />
    </>
  );
}
