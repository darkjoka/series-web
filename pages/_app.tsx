import { NextPage } from "next";
import { AppProps } from "next/app";
import React, { ReactElement, ReactNode } from "react";

import "../styles/globals.css";

import { Hero } from "../components/Hero";
import { TopNav } from "../components/TopNav";
import { Search } from "../components/Search";
import { Content } from "../components/Content";
import { SideNav } from "../components/SideNav";
import { Portal } from "../components/Portal";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const openSide = () => setIsOpen(true);
  const closeSide = () => setIsOpen(false);

  const getLayout =
    Component.getLayout ??
    ((page: ReactElement) => (
      <>
        <TopNav handler={openSide} />
        {isOpen && (
          <Portal selector={"#side"}>
            <SideNav handler={closeSide} />
          </Portal>
        )}
        <Hero />
        <Search />
        <Content>{page}</Content>
      </>
    ));

  return getLayout(<Component {...pageProps} />);
};

export default App;
