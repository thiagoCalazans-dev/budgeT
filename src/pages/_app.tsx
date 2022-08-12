import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { AppProps } from "next/app";
import { GithubLogo } from "phosphor-react";
import "../../styles/globals.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { queryClient } from "../libs/reactQuery";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    
    </>
  );
}

export default MyApp;
