import { NextPage } from "next";
import { AppProps } from "next/app";
import React, { ReactElement, ReactNode } from "react";
import NextNProgress from "nextjs-progressbar";
import { ThemeProvider } from "styled-components";

import "../styles/globals.css";

import { Hero } from "../components/Hero";
import { TopNav } from "../components/TopNav";
import { Search } from "../components/Search";
import { Content } from "../components/Content";
import { SideNav } from "../components/SideNav";
import { Portal } from "../components/Portal";
import useStore from "../store/useStore";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [isLight, setIsLight] = React.useState<boolean>(true);
  const [anyDialog, setAnyDialog] = React.useState<boolean>(false);

  const [toggleLight, toggleDark] = useStore((state) => [state.toggleLight, state.toggleDark]);
  const theme = useStore((state) => state.theme);

  const openSide = () => {
    setIsOpen(true);
    setAnyDialog(true);
  };

  const closeSide = () => {
    setIsOpen(false);
    setAnyDialog(false);
  };

  const light = () => {
    setIsLight(true);
    toggleLight();
  };

  const dark = () => {
    setIsLight(false);
    toggleDark();
  };

  React.useEffect(() => {
    const body = document.querySelector("body");
    body.style.background = theme.altBackground;
    body.style.color = theme.primaryText;

    if (anyDialog) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
  });

  const getLayout =
    Component.getLayout ??
    ((page: ReactElement) => (
      <ThemeProvider theme={theme}>
        <Portal selector={"#top"}>
          <TopNav handler={openSide} themeHandlerLight={light} themeHandlerDark={dark} isLight={isLight} />
        </Portal>
        <Portal selector={"#side"}>
          <SideNav handler={closeSide} visible={isOpen} />
        </Portal>
        <Hero />
        <Search />
        <Content>{page}</Content>
      </ThemeProvider>
    ));

  return getLayout(
    <ThemeProvider theme={theme}>
      <NextNProgress color={theme.brand} options={{ showSpinner: false }} height={5} />
      <Component {...pageProps} setDialog={setAnyDialog} />
    </ThemeProvider>
  );
};

export default App;
