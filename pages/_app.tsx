import "../styles/globals.css";

import { Hero } from "../components/Hero";
import { TopNav } from "../components/TopNav";
import { Search } from "../components/Search";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <TopNav />
      <Hero />
      <Search/>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
