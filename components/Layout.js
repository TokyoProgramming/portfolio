import React from "react";
import Head from "next/head";
import Header from "./Header";
import Hero from "./Hero";
import { getWindowSize } from "../hooks/GetWindowSize";

export default function Layout({ title, keywords, description, children }) {
  const { width } = getWindowSize();
  return (
    <div className="3xl:container 3xl:mx-auto">
      <Head>
        <title>{title} </title>
        <meta name="keywords" content={keywords} />
        <meta name="keywords" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Hero width={width} />
      <main className="container mx-auto my-7">{children}</main>
    </div>
  );
}
