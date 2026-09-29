import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from "next/head";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React from "react";
// const style ={
//
// } as React.CSSProperties;
//

function MyApp({ Component, pageProps }: AppProps) {
  return (<>

    <Head>
      <script
          type="text/javascript"
          src={"https://maps.googleapis.com/maps/api/js?key=AIzaSyAOPXPtW9ZSRH_F5tliPUID9Ph2mXi97Kg&libraries=places"}
      />
      <title>SameWay</title>
      <meta name="description" content="SameWay helps students find classmates to walk home together safely." />
      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" type="image/svg+xml" href="/sameway-icon.svg" />
      <link rel="apple-touch-icon" href="/sameway_icon.png" />
    </Head>
  <body
      className="main"
      // style={style}
  >

  <Component {...pageProps} />
  </body>



    </>)
}

export default MyApp
