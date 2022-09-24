import NextNProgress from 'nextjs-progressbar';
import React from 'react';

import Content from '../components/Content';
import PlayerModal from '../components/playerModal';
import SearchModal from '../components/searchModal';
import SideBar from '../components/sideBar/sideBar';
import TopBar from '../components/topBar';
import '../styles/globals.css';

export default function App({Component, pageProps}) {
  return (
    <>
      <NextNProgress options={{showSpinner: false}} />
      <TopBar />
      <SideBar />
      <SearchModal />
      <PlayerModal />
      <Content>
        <Component {...pageProps} />
      </Content>
    </>
  );
}
