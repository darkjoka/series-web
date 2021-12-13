import { NextPage } from "next";
import { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";

import "../styles/globals.css";

import { Hero } from "../components/Hero";
import { TopNav } from "../components/TopNav";
import { Search } from "../components/Search";
import { Content } from "../components/Content";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout =
    Component.getLayout ??
    ((page: ReactElement) => (
      <>
        <TopNav />
        <Hero />
        <Search />
        <Content>{page}</Content>
      </>
    ));

  return getLayout(<Component {...pageProps} />);
};

export default App;
