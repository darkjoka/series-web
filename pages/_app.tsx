import "../styles/globals.css";

import { Hero } from "../components/Hero";
import { TopNav } from "../components/TopNav";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <TopNav />
      <Hero />
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
