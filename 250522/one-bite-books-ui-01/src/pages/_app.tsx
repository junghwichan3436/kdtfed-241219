import { Component, ReactNode } from "react";
import "@/styles/globals.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import GlobalLayout from "@/components/global-layout";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactNode) => ReactNode;
};

export default function App({
  Component,
  pageProps,
}: AppProps & { Component: NextPageWithLayout }) {
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);
  return <GlobalLayout>{getLayout(<Component {...pageProps} />)}</GlobalLayout>;
}
// 최상위 컴포넌트가 된다
//그 밑에 오는 컴포넌트들은  ...pageProps
//몇개가 올지 모르니 전개연산자
// getLayout은 함수가 되고 필요하지 않은 곳은 갖다 쓰지 않고 필요한 곳에는 갖다 쓴다
