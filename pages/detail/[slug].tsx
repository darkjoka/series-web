import React from 'react'
import axios from "axios";
import { GetServerSideProps } from "next";
import type { ReactElement } from "react";

import { Detail } from "../../components/Detail";
import { Meta } from "../../components/Meta";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await axios.get(`${process.env.BACKEND_HOST}detail/${context?.params?.slug}`);
  console.log(context.req.headers.referer);

  return {
    props: { data: response.data.data, prev: context.req.headers.referer },
  };
};

const Page = ({ data, prev }) => {
  return (
    <>
      <Meta description={data.description} title={`Download ${data.title}`} image={data.heroImage} />
      <Detail {...data} prev={prev} />
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return page;
};

export default Page;
