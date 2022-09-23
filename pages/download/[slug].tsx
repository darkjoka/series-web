import React from 'react';
import axios from 'axios';
import {GetServerSideProps} from 'next';

import {Meta} from '../../components/Meta';
import DetailSummary from '../../components/detailSummary';
import DownLoadInfo from '../../components/downloadInfo';

export default function Page({data}) {
  return (
    <>
      <Meta
        description={data.description}
        title={`Download ${data.title}`}
        image={data.heroImage}
      />
      {/* <Detail {...data} prev={prev} /> */}
      <div className="max-w-6xl">
        <DetailSummary {...data} />
        <DownLoadInfo {...data} />
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async context => {
  const response = await axios.get(
    `${process.env.BACKEND_HOST}detail/${context?.params?.slug}`
  );

  return {
    props: {data: response.data.data},
  };
};
