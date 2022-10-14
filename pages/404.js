import React from "react";
import Head from "next/head";
import styles from "../styles/NotFound.module.scss";

import { useRouter } from "next/router";

function NotFound() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>404 Not Found</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="We Design Solutions and Experiences."
        />
        <meta property="og:image" content="/images/logo.svg" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>

      <h1>404</h1>

      <main className={styles.notFound}>
        <h2>Something's wrong</h2>
        <p>{"We can't find the page you are looking for."}</p>
        <button onClick={() => router.push("/")}>Go to the homepage</button>
      </main>
    </div>
  );
}

export default NotFound;
