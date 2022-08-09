import type { AppProps } from "next/app";
import { GithubLogo } from "phosphor-react";
import "../../styles/globals.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}

export default MyApp;
