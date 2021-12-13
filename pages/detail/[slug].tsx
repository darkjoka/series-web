import axios from "axios";
import { GetServerSideProps } from "next";
import type { ReactElement } from "react";

import { Detail } from "../../components/Detail";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await axios.get("http://localhost:2/detail");

  return {
    props: { data: response.data },
  };
};

const Page = ({ data }) => {
  return (
    <>
      <Detail {...data} />
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return page;
};

export default Page;
