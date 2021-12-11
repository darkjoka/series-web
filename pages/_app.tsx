import "../styles/globals.css";

import { Hero } from "../components/Hero";
import { TopNav } from "../components/TopNav";
import { Search } from "../components/Search";
import { Content } from "../components/Content";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <TopNav />
      <Hero />
      <Search />
      <Content>
        <Component {...pageProps} />
      </Content>
    </>
  );
}

export default MyApp;
