import axios from "axios";
import { GetServerSideProps } from "next";
import type { ReactElement } from "react";

import { Detail } from "../../components/Detail";

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log(context.params.slug);
  const response = await axios.get("http://localhost:2/detail");
  return {
    props: { data: response.data, slug: context.params.slug },
  };
};

const Page = ({ slug, data }) => {
  return (
    <>
      <Detail />
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return page;
};

export default Page;
