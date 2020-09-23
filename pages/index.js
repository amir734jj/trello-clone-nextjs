import Head from "next/head";
import App from "../client/App";
import React from "react";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico"/>
        <link
          href="http://fonts.googleapis.com/css?family=Roboto"
          rel="stylesheet"
          type="text/css"
        />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css"
        />
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"/>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/js/bootstrap.min.js"/>
      </Head>

      <main style={{ margin: 0, padding: 0}}>
        <App/>
      </main>

      <footer className="footer">Fall 2020 - Amir Hesamian</footer>
    </div>
  );
}
