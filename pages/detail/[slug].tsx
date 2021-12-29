import axios from "axios";
import { GetServerSideProps } from "next";
import type { ReactElement } from "react";

import { Detail } from "../../components/Detail";
import { Meta } from "../../components/Meta";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await axios.get(`${process.env.BACKEND_HOST}detail/${context.params.slug}`);

  return {
    props: { data: response.data.data },
  };
};

const Page = ({ data }) => {
  return (
    <>
      <Meta description={data.description} title={`Download ${data.title}`} image={data.heroImage} />
      <Detail {...data} />
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return page;
};

export default Page;
